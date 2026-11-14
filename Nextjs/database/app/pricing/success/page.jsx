
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 text-center">
        <div className="mb-5 text-5xl text-green-400">✓</div>

        <h1 className="text-2xl font-bold text-white">
          Payment Successful!
        </h1>

        <p className="mt-3 text-slate-400">
          Thank you for subscribing to Premium.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
