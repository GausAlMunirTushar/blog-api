const { Model, Schema } = require("mongoose");

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: String,
    cover: String,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    author: Schema.Types.ObjectId,
    ref: "User",
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Article = Model("Article", articleSchema);
module.exports = Article;
