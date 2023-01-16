import { isValidMobileNumber } from "../utils/util.js";

    export function hospitalMiddleware(req,res,next){

        
        let hospitalName=req.body.hospitalName;
        let address=req.body.address;
        let place=req.body.place;
        let mobileNo=req.body.mobileNo;

       if (!hospitalName) {
        res.send("Hospital Name is required")    
       }

       if (!address) {
        res.send("address Name is required")    
       }
       if (!place) {
        res.send("place Name is required")    
       }
       if (!mobileNo) {
        res.send("mobileNo Name is required")    
       }
    //    console.log("mobileNo",mobileNo.length);
       if (!isValidMobileNumber(mobileNo)) {
        res.send("your mobile number not match required format")
       }

       next()
    }