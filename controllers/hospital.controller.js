import {
  deleteData,
  getAll,
  getSingleView,
  save,
} from "../services/hospital.service.js";
import { update } from "../services/hospital.service.js";

export async function hospitalData(req, res, next) {
  let hospitalName = req.body.hospitalName;
  let address = req.body.address;
  let place = req.body.place;
  let mobileNo = req.body.mobileNo;

  try {
    const result = await save(hospitalName, address, place, mobileNo);
    res.send(result);
  } catch (err) {
    next(err);

    //    res.send({error:"insertion failed"})
  }
}

export async function getHospitals(req, res) {
  const { result } = await getAll();
  res.send(result);
}

export async function getHospital(req, res, next) {
  try {
    const viewHospital = await getSingleView(req.params.id);
    res.send(viewHospital);
  } catch (error) {
    next(error);
  }
}

export async function updateData(req, res, next) {
  try {
    const updatedData = await update(req, res);
    res.send(updatedData);
    //  console.log(updatedData);
  } catch (error) {
    next(error);
  }
}

export async function deleteHospital(req, res, next) {
  try {
    console.log("delete");
    const dltHsptl = await deleteData(req.params.id);
    // throw new Error('errorrr')
    res.send(dltHsptl);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

