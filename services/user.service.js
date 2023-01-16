import userModel from "../models/user.model.js";

export async function save(data) {
  const user = new userModel(data);
  // console.log();
  await user.save();
  return { user };
}
