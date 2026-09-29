export async function GET() {
  return Response.json({
    message: "Todos fetched successfully",
  });
}

export async function POST(request) {
  const body = await request.json();

  return Response.json({
    success: true,
    message: "Todo created successfully",
    todo: body,
  });
}