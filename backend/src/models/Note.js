import mongoose from "mongoose";

//create note schema
//use schema to create note model

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt and updatedAt fields
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;