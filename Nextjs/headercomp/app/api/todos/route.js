export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const completed = searchParams.get("completed");
  const limit = searchParams.get("limit");

  const apiUrl = new URL(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (completed !== null) {
    apiUrl.searchParams.set("completed", completed);
  }

  if (limit !== null) {
    apiUrl.searchParams.set("_limit", limit);
  }

  const response = await fetch(apiUrl);

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch todos" },
      { status: response.status }
    );
  }

  const todos = await response.json();

  return Response.json({
    success: true,
    completed,
    limit,
    todos,
  });
}