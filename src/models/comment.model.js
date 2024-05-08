const { Model, Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    body: String,
    status: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
    article: {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Comment = Model("Comment", commentSchema);
module.exports = Comment;
