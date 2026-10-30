export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const completed = searchParams.get("completed");
  const limit = searchParams.get("limit");

  console.log("completed:", completed);
  console.log("limit:", limit);

  return Response.json({
    completed,
    limit,
  });
}