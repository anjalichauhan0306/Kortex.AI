import Message from '../model/message.model.js';
import Conversation from '../model/conversation.model.js'

export const createConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    console.log("userId", userId);
    const conversation = await Conversation.create({
      userId: userId,
    });

    return res.status(200).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `create conversation error ${error}` });
  }
};

export const getConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    console.log("userid", userId);
    const conversation = await Conversation.Find({
      userId: userId,
    }).sort({updatedAt:-1});

    return res.status(200).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `create conversation error ${error}` });
  }
};

export const upadateConversation = async (req, res) => {
  try {
    const {conversatioId , title} = req.body;
    const conversation = await Conversation.FindByIdAndUpdate(conversatioId,{title});

    return res.status(200).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `update conversation error ${error}` });
  }
};

export const saveMessage =async (req,res) => {
    try {
        const {conversatioId,role,content} = req.body;
        const message=await Message.create({
            conversatioId,
            content,
            role
        })
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json({message:`save nessage error:${error}`})
    }
}

export const getMessage =async (req,res) => {
    try {
        const message=await Message.Find({
            conversatioId:req.params.conversatioId
        }).sort({createdAt:-1})
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json({message:`get nessage error:${error}`})
    }
}

