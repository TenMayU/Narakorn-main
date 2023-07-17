import mongoose from "mongoose";

const {Schema} = mongoose

const PostSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    img:{
        type:String,

    },
    content:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
},
{timestamps:true}
)
const UserPost =  mongoose.models.UserPost ||  mongoose.model("UserPost", PostSchema)
export default UserPost