import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    createdAT:{type:Date,default:Date.now},
})

export const User = mongoose.model('user',userSchema)