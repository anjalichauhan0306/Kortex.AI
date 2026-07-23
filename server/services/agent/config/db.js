import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected Successfully !");
    } catch (error) {
        console.error(`DB NOT CONNECTED ${error}`);
    }
}

export default connectDb;