export function doctorMiddleware(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let name = req.body.name;
  let address = req.body.address;
  let department = req.body.department;
  let startTime = req.body.startTime;
  let endTime = req.body.endTime;

  if (!username) {
    res.send("Username required");
  }
  if (!password) {
    res.send("Password required");
  }
  if (!name) {
    res.send("Name is required");
  }
  if (!address) {
    res.send("Address required");
  }
  if (!department) {
    res.send("Department required");
  }
  if (!startTime) {
    res.send("Starting Time required");
  }
  if (!endTime) {
    res.send("Ending Time required");
  }

  next();
}
