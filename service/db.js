//import mongoose

const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/bServer",{useNewUrlParser:true})
 
//model for collection 
//schema-fields and values in model

const User=mongoose.model("User",{
    acno:Number,
    uname:String,
    passw:String,
    balance:Number,
    transaction:[]


})


//export model
module.exports={
    User
}