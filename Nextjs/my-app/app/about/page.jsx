const Page = () => {
  return (
    <>
      <div>About Page</div>

      <div className="flex gap-3">
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-orange-400">
          Home
        </button>

        <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-orange-400">
          About
        </button>

        <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-orange-400">
          Address
        </button>

        <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-orange-400">
          Contact Me
        </button>
      </div>
    </>
  );
};

export default Page;