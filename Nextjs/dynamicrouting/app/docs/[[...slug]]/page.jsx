const DocsPage = async ({ params }) => {
  const { slug } = await params;

  console.log("Slug:", slug);

  return (
    <div>
      <h1>Docs Page</h1>

      <p>
        Slug: {slug ? slug.join(" / ") : "No slug"}
      </p>
    </div>
  );
};

export default DocsPage;