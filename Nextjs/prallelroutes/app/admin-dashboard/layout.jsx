const Adminlayout = ({ children, analytics, team }) => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen p-4">
      <div>
        {children}
      </div>

      <div className="grid grid-rows-2 gap-4">
        <div>
          {analytics}
        </div>

        <div>
          {team}
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;