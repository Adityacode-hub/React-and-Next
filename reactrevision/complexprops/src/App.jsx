import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/ThemeToggler";


// ==================== NAVIGATION ====================

function Navigation() {
  const { isDark, toggleTheme } = useTheme();

  const Section = [
    {
      id: "basic",
      label: "Basic Props",
      icon: "😋",
    },
    {
      id: "children",
      label: "Children Props",
      icon: "😎",
    },
    {
      id: "complex",
      label: "Complex Props",
      icon: "😍",
    },
    {
      id: "ref",
      label: "Ref Props",
      icon: "😘",
    },
    {
      id: "theme",
      label: "Theme Props",
      icon: "🥰",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-4">

        <div className="flex items-center justify-center gap-2">

          {/* Navigation Buttons */}

          {Section.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                flex items-center gap-2
                rounded-lg
                px-4 py-2.5
                font-medium
                text-gray-200
                transition-all duration-200
                hover:bg-blue-900
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
                active:scale-95
              "
            >
              <span>{section.icon}</span>

              <span>{section.label}</span>
            </button>
          ))}


          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            className="
              ml-3
              flex items-center justify-center
              rounded-full
              border border-gray-700
              bg-amber-500
              px-4 py-2
              text-lg
              transition-all duration-200
              hover:scale-105
              hover:bg-amber-400
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-amber-400
            "
          >
            {isDark ? "🌙" : "☀️"}
          </button>

        </div>
      </div>
    </nav>
  );
}


// ==================== APP CONTENT ====================

function Appcontent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900"
      }`}
    >

      {/* Navigation */}

      <Navigation />


      {/* Main Content */}

      <main className="mx-auto max-w-5xl px-6 py-16">


        {/* ==================== HERO ==================== */}

        <header className="text-center">

          <div
            className="
              mb-4
              inline-block
              rounded-full
              bg-blue-900/30
              px-4 py-2
              text-sm
              font-bold
              text-blue-400
              transition-all
              duration-200
              hover:bg-amber-700
              hover:text-white
            "
          >
            React Learning Guide
          </div>


          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            React Props Explained
          </h1>


          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A comprehensive guide to understanding props in React,
            from basic props to advanced patterns.
          </p>

        </header>


        {/* ==================== BASIC PROPS ==================== */}

        <section
          id="basic"
          className="
            mt-12
            scroll-mt-32
            rounded-2xl
            border border-gray-800
            bg-gray-950
            p-8
            shadow-xl
          "
        >
          <BasicProps />
        </section>


        {/* ==================== CHILDREN PROPS ==================== */}

        <section
          id="children"
          className="
            mt-12
            scroll-mt-32
            rounded-2xl
            border border-gray-800
            bg-gray-950
            p-8
            shadow-xl
          "
        >
          <ChildrenProps />
        </section>


        {/* ==================== COMPLEX PROPS ==================== */}

        <section
          id="complex"
          className="
            mt-12
            scroll-mt-32
            rounded-2xl
            border border-gray-800
            bg-gray-950
            p-8
            shadow-xl
          "
        >
          <ComplexProps />
        </section>


        {/* ==================== REF PROPS ==================== */}

        <section
          id="ref"
          className="
            mt-12
            scroll-mt-32
            rounded-2xl
            border border-gray-800
            bg-gray-950
            p-8
            shadow-xl
          "
        >
          <RefProps />
        </section>


        {/* ==================== THEME ==================== */}

        <section
          id="theme"
          className="
            mt-12
            scroll-mt-32
            rounded-2xl
            border border-gray-800
            bg-gray-950
            p-8
            shadow-xl
          "
        >
          <ThemeToggler />
        </section>

      </main>


      {/* ==================== FOOTER ==================== */}

      <footer
        className="
          flex
          items-center
          justify-center
          border-t border-gray-800
          py-8
          text-gray-400
        "
      >
        Made with Bun + Tailwind 😍
      </footer>

    </div>
  );
}


// ==================== APP ====================

function App() {
  return (
    <ThemeProvider>
      <Appcontent />
    </ThemeProvider>
  );
}


export default App;