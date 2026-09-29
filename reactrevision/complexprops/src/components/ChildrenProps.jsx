function Card({ children, title, color = "blue", description }) {
  const colorClasses = {
    blue: {
      border: "border-blue-500",
      icon: "bg-blue-100 text-blue-600",
    },
    purple: {
      border: "border-purple-500",
      icon: "bg-purple-100 text-purple-600",
    },
    green: {
      border: "border-green-500",
      icon: "bg-green-100 text-green-600",
    },
    red: {
      border: "border-red-500",
      icon: "bg-red-100 text-red-600",
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`rounded-2xl border border-gray-200 border-l-4 ${colors.border} bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="mb-5 flex items-start gap-4">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
        >
          <span className="text-lg">👤</span>
        </div>

        <div>
          {title && (
            <h3 className="text-lg font-bold text-gray-900">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>

      </div>

      <div className="space-y-3 text-sm text-gray-600">
        {children}
      </div>
    </div>
  );
}


function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col gap-5",

    horizontal: "flex flex-wrap gap-5",

    grid: "grid grid-cols-1 gap-5 md:grid-cols-2",
  };

  return (
    <div className={layoutClasses[layout]}>
      {children}
    </div>
  );
}


function ChildrenProps() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">

      {/* Header */}
      <div className="mb-8">

        <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
          React Concept
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
          Children Props
        </h2>

        <p className="mt-2 max-w-2xl text-gray-500">
          Learn how the children prop allows you to pass content
          directly between a component's opening and closing tags.
        </p>

      </div>


      {/* Example */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Card Component with Children
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            The content inside the Card component becomes its children.
          </p>
        </div>


        <Container layout="grid">

          <Card
            title="User Profile"
            color="red"
            description="Basic information about the user"
          >
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="font-medium text-gray-500">
                Name
              </span>

              <span className="font-semibold text-gray-900">
                Aditya Kumar
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="font-medium text-gray-500">
                Email
              </span>

              <span className="font-semibold text-gray-900">
                Adityacodebase@gmail.com
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">
                Role
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Developer
              </span>
            </div>

          </Card>


          <Card
            title="Children Content"
            color="purple"
            description="Anything can be passed as children"
          >
            <p>
              Text, elements, components, lists, or even other
              components can be passed as children.
            </p>

            <div className="rounded-lg bg-purple-50 p-4 text-sm text-purple-700">
              This entire section is coming through{" "}
              <span className="font-bold">children</span>.
            </div>

          </Card>

        </Container>

      </div>

    </div>
  );
}

export default ChildrenProps;