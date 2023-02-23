const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserModel",
    },

    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GoalModel = mongoose.model("goal", goalSchema);
module.exports = GoalModel;
