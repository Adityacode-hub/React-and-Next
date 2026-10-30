import { connectDB } from "@/lib/db";
import Note from "@/lib/models/Note";

// GET METHOD
export async function GET() {
  try {
    await connectDB();

    const notes = await Note.find();

    return Response.json(notes);
  } catch (err) 
  {
    return Response.json(
      {
        error: "Failed to fetch notes",
      },
      { status: 500 }
    );
  }
}

// POST METHOD
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const note = await Note.create(body);

    return Response.json(note, { status: 201 });
  } catch (err) {
    return Response.json(
      {
        error: "Failed to create note",
      },
      { status: 500 }
    );
  }
}