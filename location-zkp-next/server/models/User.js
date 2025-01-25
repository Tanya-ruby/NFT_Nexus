const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    hackthone: [
      {
        hash: {
          type: String,
          index: true,
        },
        nft: {
          type: String,
        },
        name: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
