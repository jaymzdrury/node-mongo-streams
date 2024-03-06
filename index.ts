import mongoose from "mongoose";
import User, { UserInput } from "./models/user.model";

const URI = "";

mongoose.connect(URI).then(() => console.log("connected"));

async function createUser(payload: UserInput) {
  return User.create(payload);
}

User.watch().on("change", (data) => {
  if (data.operationType === "insert") {
    console.log("User inserted: ", data.fullDocument);
  }
  if (data.operationType === "update") {
    console.log("User updated: ", data.updateDescription.updatedFields);
  }
  if (data.operationType === "delete") {
    console.log("User deleted: ", data._id);
  }
});

async function run() {
  await createUser({
    email: "email2@email.com",
    name: "James",
  });
}

run();
