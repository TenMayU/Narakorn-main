import mongoose from "mongoose";

async function connect(){
    try{
    await mongoose.connect(process.env.MONGO)
    }catch(error){
       throw new Error("Error")
    }
    mongoose.set('strictQuery', false)
}

async function disconnect(){
    try{
        await mongoose.disconnect
        }catch(error){
           throw new Error("Error")
        }
        mongoose.set('strictQuery', false)
}

export default connect