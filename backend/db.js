const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  userNam: String,
  email: { type: String, unique: true },
  password: String,
});

const passCard = new Schema({
  userId: ObjectId,
  url: String,
  userName: String,
  password: String,
});

export const passModel = mongoose.model("passwords", passCard);
export const userModel = mongoose.model("users", userSchema);
