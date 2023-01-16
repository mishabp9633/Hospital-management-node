import HospitalModel from "../models/hospital.model.js";


export async function save(hospitalName, address, place, mobileNo) {
  const result = new HospitalModel({
    hospitalName,
    address,
    place,
    mobileNo,
  });
  await result.save();

  return { result };
}

export async function getAll() {
  const result = await HospitalModel.find({});

  return { result };
}

export async function getSingleView(id) {
  const singleView = await HospitalModel.findById(id);
  return { singleView };
}

export async function update(req, res) {
  const updatedHospital = await HospitalModel.findByIdAndUpdate(
    req.params.id,
    {
      hospitalName: req.body.hospitalName,
      address: req.body.address,
      place: req.body.place,
      mobileNo: req.body.mobileNo,
    },
    { new: true }
  );

  return { updatedHospital };
}

export async function deleteData(id) {
  const deletedHospitalData = await HospitalModel.findByIdAndDelete(id);
  // await deletedHospitalData.save()
  return { deletedHospitalData };
}
