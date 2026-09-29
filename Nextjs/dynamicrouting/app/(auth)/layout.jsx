const Commonlayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className=" font-5xl font-bold text-amber-500">SignIN Layout</h1>
      {children}
    </div>
  );
};

export default Commonlayout;