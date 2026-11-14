
import Stripe from "stripe";

export const stripeClient = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);

export const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;

export const STRIPE_PRICE_IDs = {
  premium: "price_1UbZLUGgtFTTr12tCsnkH64H",
} as const;
