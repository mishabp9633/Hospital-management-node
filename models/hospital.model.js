import mongoose from 'mongoose'


const hospitalSchema = new mongoose.Schema({
    hospitalName:{
        type : mongoose.Schema.Types.String,
        required : true
    },
    address:{
        type : mongoose.Schema.Types.String,
        required : true
    },
    place:{
        type : mongoose.Schema.Types.String,
        required : true
    },
    mobileNo:{
        type : mongoose.Schema.Types.String,
        required : true
    },

    
})

const hospital = mongoose.model("hospital",hospitalSchema);
export default hospital;
