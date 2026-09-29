const Layout = ({ children }) => {
  return (
    <>
      <h1>Header</h1>
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default Layout;