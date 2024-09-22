



const mongoose = require("mongoose")

const user = mongoose.Schema({
    firstName:{type:String , required:true},
    lastName:{type:String  , required:true},
    email:{type:String, required:true},
    Department:{type:String, require:true}
},
{
    timestamps:true
})

const User = mongoose.model("user",user)

module.exports ={
    User
}