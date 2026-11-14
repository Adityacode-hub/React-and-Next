
"use client";

import { useState } from "react";

type PricingTier = {
  id: string;
  name: string;
  price: number;
  priceId?: string;
  currency: string;
  interval: string;
  features: string[];
  isPopular: boolean;
};

type PricingCardsProps = {
  tiers: PricingTier[];
};

export function PricingCards({ tiers }: PricingCardsProps) {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (priceId?: string) => {
    if (!priceId) {
      alert("This plan is free. No subscription needed.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      if (!data.url) {
        throw new Error("Stripe checkout URL not received");
      }

      window.location.href = data.url;

    } catch (error) {
      console.error("Checkout error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to start checkout."
      );

      setLoading(false);
    }
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
            tier.isPopular
              ? "border-blue-500 bg-gradient-to-br from-blue-950 via-slate-950 to-black shadow-2xl shadow-blue-900/30"
              : "border-white/10 bg-slate-950"
          }`}
        >
          {tier.isPopular && (
            <span className="absolute -top-3 right-7 rounded-full bg-blue-500 px-4 py-1.5 text-xs font-bold text-white">
              MOST POPULAR
            </span>
          )}

          <h2 className="text-2xl font-bold text-white">
            {tier.name}
          </h2>

          <div className="my-7">
            <span className="text-5xl font-bold text-white">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: tier.currency,
                maximumFractionDigits: 0,
              }).format(tier.price)}
            </span>

            <span className="ml-2 text-sm text-slate-400">
              / {tier.interval}
            </span>
          </div>

          <div className="mb-7 h-px bg-white/10" />

          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-400">
            What's included
          </p>

          <ul className="flex-1 space-y-4">
            {tier.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <span className="text-blue-400">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <button
            type="button"
            disabled={tier.price === 0 || loading}
            onClick={() => handleSubscribe(tier.priceId)}
            className={`mt-10 w-full rounded-xl px-6 py-3.5 text-sm font-semibold transition ${
              tier.isPopular
                ? "bg-blue-500 text-white hover:bg-blue-400"
                : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
            } disabled:cursor-not-allowed disabled:opacity-50`}
          >
            {tier.price === 0
              ? "Free Plan"
              : loading
                ? "Redirecting..."
                : "Get Started"}
          </button>
        </div>
      ))}
    </div>
  );
}
