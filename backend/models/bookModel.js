import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    creationTime: {
      type: Date,
      default: Date.now(),
    },

    updationTime: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timeStamps: true,
  }
);

export const Book = mongoose.model("Cat", bookSchema);
