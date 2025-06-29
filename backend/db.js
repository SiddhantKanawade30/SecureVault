import {mongoose} from "mongoose"
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  userName: String,
  email: { type: String, unique: true },
  password: String,
});

const passCard = new Schema({
  userId: {type : ObjectId , required : true},
  url: String,
  userName: String,
  password: String,
});

export const passModel = mongoose.model("passwords", passCard);
export const userModel = mongoose.model("users", userSchema);
