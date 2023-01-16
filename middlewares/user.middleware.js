import { isValidMobileNumber } from "../utils/util";

export function userMiddleware(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let name = req.body.name;
  let address = req.body.address;
  let mobileNo = req.body.mobileNo;
  let email = req.body.email;
  let role = req.body.role;

  if (!username) {
    res.send("Username is required");
  }
  if (!password) {
    res.send("password is required");
  }
  if (!name) {
    res.send("name is required");
  }
  if (!address) {
    res.send("address is required");
  }
  if (!mobileNo) {
    res.send("mobileNo is required");
  }
  if (!isValidMobileNumber(mobileNo)) {
    res.send("your mobile number not match required format");
  }
  if (!email) {
    res.send("email is required");
  }
  if (!role) {
    res.send("role is required");
  }

  next();
}
