const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true, // create a timestamp to monitor user creation
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
