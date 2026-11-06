import { connectDB } from "@/lib/db";
import Note from "@/lib/models/Note";

// PATCH METHOD
export async function PATCH(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedNote) {
      return Response.json(
        { error: "Note not found" },
        { status: 404 }
      );
    }

    return Response.json(updatedNote);
  } catch (err) {
    return Response.json(
      { error: "Failed to update note" },
      { status: 500 }
    );
  }
}


export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deleteNote = await Note.findByIdAndDelete(id);

    if (!deleteNote) {
      return Response.json(
        { message: "Note not found" },
        { status: 404 }
      );
    }

    return Response.json({
      message: "Note deleted successfully",
    });
  } catch (err) {
    return Response.json(
      { error: "Failed to delete note" },
      { status: 500 }
    );
  }
}
