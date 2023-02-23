const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a Name!"],
    },

    email: {
      type: String,
      required: [true, "Please enter an Email!"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please enter a Password"],
    },

    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
