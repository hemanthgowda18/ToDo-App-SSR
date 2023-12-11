const { Schema, model } = require("mongoose");
//defining the Schema
const taskSchema = new Schema(
  {
    task: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//modelling while exporting
module.exports = model("task", taskSchema);
