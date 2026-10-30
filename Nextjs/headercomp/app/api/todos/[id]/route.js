export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  return Response.json({
    success: true,
    message: "Todo replaced successfully",
    todo: {
      id,
      ...body,
    },
  });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  return Response.json({
    success: true,
    message: "Todo partially updated successfully",
    todo: {
      id,
      ...body,
    },
  });
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return Response.json({
    success: true,
    message: `Todo ${id} deleted successfully`,
  });
}