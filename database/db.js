import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb+srv://santhoshdurai:Santhosh123@cluster0.ddmlm.mongodb.net/ecomWeb?retryWrites=true&w=majority'
const Connection = async()=>{
    try{
        await  mongoose.connect (MONGODB_URL);
    console.log("connect to mongodb")
    }catch(error)
    {
        console.log("Error:", error.message)
    }
    }

export default Connection;