import doctorModel from "../models/doctor.model.js";
import bcrypt from "bcrypt";

export async function createDoctor(doctorData) {
  let doctor = await doctorModel.findOne({ username: doctorData.username });
  if (doctor) return "Doctor already registerd";

  let password = doctorData.password;

 const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  doctorData.password = password;

  const result = await doctorModel.create({ ...doctorData });
  console.log(doctorData);
  return { result };
}

// export async function save(data){
//     const doctor = new doctorModel(data);
//     await doctor.save();
//     return{doctor}
// }
