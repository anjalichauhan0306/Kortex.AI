import mongoose from "mongoose";

const conversationSchema = new mongoose.create({
    title : {type:String,default:"New chat"},
    userId:{type:String},

},{
    timestamps:true
})

const Conversation = mongoose.model("Conversation",conversationSchema);
export default Conversation;