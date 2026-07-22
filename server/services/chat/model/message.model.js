import mongoose from "mongoose";

const messgageSchema = new mongoose.create({
    conversationId : {
        type:mongoose.Schema.type.objectId,
        ref:"Conversation"
    },
    role : {
        type:String,
        enum :["user","assistant"]
    },
    content :String
},{
    timestamps:true
})

const message = mongoose.model("Message",messgageSchema);
export default message;