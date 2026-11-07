import { createContact } from "@/actions/contact";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        action={createContact}
        className="w-full max-w-md space-y-4 rounded-xl bg-amber-700 p-8 shadow"
      >
        <h1 className=" text-black text-2xl font-bold">User Registration</h1>

        <input 
          name="name"
          placeholder="Enter your name"
          required
          className="w-full rounded border p-3"
        />

        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full rounded border p-3"
        />

        <input
          name="mobile"
          placeholder="Enter your mobile"
          required
          className="w-full rounded border p-3"
        />

        <textarea
          name="address"
          placeholder="Enter your address"
          required
          className="w-full rounded border p-3"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}