import Link from "next/link";

const NotfoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-600">
            404 Error
          </p>

          <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">
            Page Not Found
          </h1>

          <p className="mt-5 max-w-md text-lg leading-8 text-gray-500">
            Oops! The page you're looking for doesn't exist,
            may have been moved, or you might have entered
            the wrong URL.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">

            {/* Go Home → Admin Dashboard */}
            <Link
              href="/admin-dashboard"
              className="rounded-full bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Go Home
            </Link>

            {/* Admin Dashboard */}
            <Link
              href="/admin-dashboard"
              className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:border-violet-500 hover:text-violet-600"
            >
              Admin Dashboard
            </Link>

          </div>
        </div>

        {/* SVG */}
        <div className="flex justify-center">
          <img
            src="/undraw_page-eaten_b2rt.svg"
            alt="Page not found"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default NotfoundPage;