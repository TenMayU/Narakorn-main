import mongoose from "mongoose";

const {Schema} = mongoose

const UserSchema = new Schema({
    name:{
        type:String,
        unique:true,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
},
{timestamps:true}
)
const User=  mongoose.models.User ||  mongoose.model("User",UserSchema)
export default User