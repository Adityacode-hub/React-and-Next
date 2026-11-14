
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripeClient } from "@/lib/stripe";
import prisma from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing webhook signature or secret" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripeClient.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);

    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const checkoutSession = event.data.object;

        if (
          checkoutSession.mode !== "subscription" ||
          !checkoutSession.subscription
        ) {
          break;
        }

        const userId =
          checkoutSession.metadata?.userId ??
          checkoutSession.client_reference_id;

        if (!userId) {
          throw new Error("User ID missing from checkout session");
        }

        const subscriptionId =
          typeof checkoutSession.subscription === "string"
            ? checkoutSession.subscription
            : checkoutSession.subscription.id;

        const subscription =
          await stripeClient.subscriptions.retrieve(subscriptionId);

        const priceId = subscription.items.data[0]?.price.id;

        if (!priceId) {
          throw new Error("Subscription price not found");
        }

        const isActive =
          subscription.status === "active" ||
          subscription.status === "trialing";

        await prisma.user.update({
          where: { id: userId },
          data: {
            plan: isActive ? "PREMIUM" : "FREE",
            stripeCustomerId:
              typeof checkoutSession.customer === "string"
                ? checkoutSession.customer
                : checkoutSession.customer?.id ?? null,
            stripeSubscriptionId: subscription.id,
            stripePriceId: priceId,
            stripeCurrentPeriodEnd: new Date(
              subscription.items.data[0].current_period_end * 1000
            ),
          },
        });

        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const userId = subscription.metadata.userId;

        if (!userId) {
          console.error("User ID missing from subscription metadata");
          break;
        }

        const priceId = subscription.items.data[0]?.price.id;

        if (!priceId) {
          throw new Error("Subscription price not found");
        }

        const isActive =
          subscription.status === "active" ||
          subscription.status === "trialing";

        await prisma.user.update({
          where: { id: userId },
          data: {
            plan: isActive ? "PREMIUM" : "FREE",
            stripeCustomerId:
              typeof subscription.customer === "string"
                ? subscription.customer
                : subscription.customer.id,
            stripeSubscriptionId: subscription.id,
            stripePriceId: priceId,
            stripeCurrentPeriodEnd: new Date(
              subscription.items.data[0].current_period_end * 1000
            ),
          },
        });

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const userId = subscription.metadata.userId;

        if (!userId) {
          console.error("User ID missing from deleted subscription metadata");
          break;
        }

        await prisma.user.update({
          where: { id: userId },
          data: {
            plan: "FREE",
            stripeSubscriptionId: null,
            stripePriceId: null,
            stripeCurrentPeriodEnd: null,
          },
        });

        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook processing error:", error);

    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
