const UserData = async ({ params }) => {
  //this is the method of taking the paramatic data 
  const { userid } = await params;

  return (
    <>
      <div>UserData</div>
      <h1>This is the user data</h1>
      <p>User ID: {userid}</p>
    </>
  );
};

export default UserData;