import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: true,
    lowercase: true,
    // unique : true
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
    minLength: [6, "Your password should be contain minimum 6 characters"],
    maxLength: [225, "Your password cannot exceed 15 characters"],
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.String,
  },
  department: {
    type: mongoose.Schema.Types.String,
  },
  timeStart: {
    type: mongoose.Schema.Types.String,
  },
  timeEnd: {
    type: mongoose.Schema.Types.String,
  },
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"hospital"
  },
   role: {
     type: mongoose.Schema.Types.String,
   },
});
const doctor = mongoose.model("Doctor", doctorSchema);
export default doctor;
