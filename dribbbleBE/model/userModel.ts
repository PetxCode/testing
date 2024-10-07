import { Document, model, Schema } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
  verifyToken: string;
  verify: boolean;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    verify: {
      type: Boolean,
    },
    verifyToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
