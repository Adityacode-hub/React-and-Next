
import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note =
  mongoose.models.Notes || mongoose.model("Notes", createSchema);
export default Note;
