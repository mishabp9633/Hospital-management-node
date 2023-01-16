// import { MongoTopologyClosedError } from "mongodb";
import mongoose from "mongoose";
import { isValidMobileNumber } from "../utils/util.js";


const userSchema = new mongoose.Schema({
    username : {
        type: mongoose.Schema.Types.String,
         required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : mongoose.Schema.Types.Mixed,
        required : true,
        unique : true,
        maxLength : [15,"Your password cannot exceed 15 characters"],
        minLength : [6,"Your password should be contain minimum 6 characters"],
    },
    name : {
        type: mongoose.Schema.Types.String,
        required : true,
    },
    address : {
        type: mongoose.Schema.Types.String,
        required : true,
    },
    mobileNo : {
        type : mongoose.Schema.Types.String,
        required : true,
        // match:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        validate: {
            validator: (v)=> isValidMobileNumber(v),
            message: 'Invalid mobile number'
        }
    },
    email: {
        type : mongoose.Schema.Types.String,
        unique : true,
        required : true
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    role : {
        type : mongoose.Schema.Types.String,
        required : true
    },
    token :{
        type : mongoose.Schema.Types.String,
    }
})

const user = mongoose.model("User",userSchema)
export default user;