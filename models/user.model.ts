import mongoose from "mongoose";

export interface UserInput {
  email: string;
  name: string;
}

export interface UserDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

userSchema.index({ email: 1 });

export default mongoose.model<UserDocument>("User", userSchema);
