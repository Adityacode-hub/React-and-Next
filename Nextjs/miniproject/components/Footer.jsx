import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      {/* Main Footer */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

          {/* Column 1 */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>

            <nav className="list-none mb-10">
              <li>
                <Link href="/first" className="text-gray-400 hover:text-white cursor-pointer">
                  First Link
                </Link>
              </li>

              <li>
                <Link href="/second" className="text-gray-400 hover:text-white cursor-pointer">
                  Second Link
                </Link>
              </li>

              <li>
                <Link href="/third" className="text-gray-400 hover:text-white cursor-pointer">
                  Third Link
                </Link>
              </li>

              <li>
                <Link href="/fourth" className="text-gray-400 hover:text-white cursor-pointer">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              PRODUCTS
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Features
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Pricing
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Documentation
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Updates
                </a>
              </li>
            </nav>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              COMPANY
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  About
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Blog
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Careers
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Contact
                </a>
              </li>
            </nav>
          </div>

          {/* Column 4 */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              RESOURCES
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Help Center
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Community
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Guides
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Support
                </a>
              </li>
            </nav>
          </div>

          {/* Column 5 */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              LEGAL
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Privacy
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Terms
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Security
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  License
                </a>
              </li>
            </nav>
          </div>

          {/* Column 6 */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SOCIAL
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  GitHub
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Twitter
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  Instagram
                </a>
              </li>

              <li>
                <a className="text-gray-400 hover:text-white cursor-pointer">
                  LinkedIn
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container px-5 py-8 mx-auto flex flex-wrap items-center">

          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">

            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-gray-400"
              >
                Subscribe
              </label>

              <input
                type="text"
                id="footer-field"
                name="footer-field"
                placeholder="Enter your email"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-pink-900 focus:bg-transparent focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
              Subscribe
            </button>

            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
              Stay updated with our latest news
              <br className="lg:block hidden" />
              and product updates.
            </p>
          </div>

          {/* Social Icons */}
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">

            {/* Facebook */}
            <a className="text-gray-400 hover:text-white cursor-pointer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8h-3V6c0-1 .5-2 2-2h2V1h-3c-4 0-5 2-5 5v2H6v4h3v9h4v-9h3l1-4z"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a className="ml-3 text-gray-400 hover:text-white cursor-pointer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a className="ml-3 text-gray-400 hover:text-white cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"
                />

                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a className="ml-3 text-gray-400 hover:text-white cursor-pointer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />

                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="none"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">

          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2026 MyWebsite —
            <a
              href="https://github.com"
              className="text-gray-500 ml-1 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>

          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
            Built with Next.js & Tailwind CSS
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;