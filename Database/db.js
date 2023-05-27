import mongoose from "mongoose"


const Connection = async (URL) => {
    try{
       await mongoose.connect(URL,{useNewUrlParser: true});
       console.log("Database Connected")
    }catch (error){
        console.log('Error connecting with database', error);
    }
}  

export default Connection;