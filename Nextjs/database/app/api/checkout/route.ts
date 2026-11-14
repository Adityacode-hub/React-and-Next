
import { NextResponse } from "next/server";
import { stripeClient, STRIPE_PRICE_IDs } from "@/lib/stripe";
import { requireAuth } from "@/lib/auth-guard";

export async function POST() {
  try {
    // 1. Authenticate user
    const session = await requireAuth();

    // 2. Application URL
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    if (!appUrl) {
      throw new Error("NEXT_PUBLIC_APP_URL is missing");
    }

    // 3. Create Stripe Checkout Session
    const checkoutSession =
      await stripeClient.checkout.sessions.create({
        mode: "subscription",

        customer_email: session.user.email,

        // Identify the application user
        client_reference_id: session.user.id,

        // Metadata on Checkout Session
        metadata: {
          userId: session.user.id,
        },

        // Metadata on the Stripe Subscription
        subscription_data: {
          metadata: {
            userId: session.user.id,
          },
        },

        line_items: [
          {
            price: STRIPE_PRICE_IDs.premium,
            quantity: 1,
          },
        ],

        success_url: `${appUrl}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${appUrl}/pricing`,
      });

    if (!checkoutSession.url) {
      throw new Error("Stripe Checkout URL was not generated");
    }

    return NextResponse.json({
      url: checkoutSession.url,
    });

  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json(
      { error: "Checkout session creation failed" },
      { status: 500 }
    );
  }
}
