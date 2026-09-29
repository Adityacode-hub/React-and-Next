const NewPost = async ({ params }) => {
  const { userid, postid } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-5 rounded border border-amber-300 text-2xl">
      <div>
        NewPost: {postid}
        <br />
        Newuserid: {userid}
      </div>
    </div>
  );
};

export default NewPost;