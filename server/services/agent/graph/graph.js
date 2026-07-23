import { StateGraph } from "@langchain/langgraph";
import { AgentState } from "./state.js";
import { router } from "./router.js";
import {chatAgent} from '../agents/chat.agent.js'
import { imageGenAgent } from "../agents/imageGen.agent";
import { searchAgent } from "../agents/search.agent";
import { pdfAgent } from "../agents/pdf.agent";
import { pptAgent } from "../agents/ppt.agent";

const WorkFlow = new StateGraph(AgentState)
WorkFlow.addNode("router",router)
WorkFlow.addNode("chat",chatAgent)
WorkFlow.addNode("ppt",pptAgent)
WorkFlow.addNode("pdf",pdfAgent)
WorkFlow.addNode("search",searchAgent)
WorkFlow.addNode("imageGen",imageGenAgent)
WorkFlow.addNode("coding",codingAgent)

WorkFlow.addEdge("__start__","router")
WorkFlow.addConditionalEdges("router",(state)=>{
    switch (state.agent) {
        case "chat":
            return "chat";
            break;
        case "coding":
            return "coding";
            break;
        case "ppt":
            return "ppt";
            break;
        case "imageGen":
            return "imageGen";
            break;
        case "search":
            return "search";
        default: 
          return "chat";
    }
}, {
    chat:"chat",
    search:"search",
    ppt:"ppt",
    pdf:"pdf",
    coding:"coding",
    imageGen:"imageGen"
})

WorkFlow.addEdge("search","chat")
WorkFlow.addEdge("chat","__end__");
WorkFlow.addEdge("coding","__end__");
WorkFlow.addEdge("ppt","__end__");
WorkFlow.addEdge("pdf","__end__");
WorkFlow.addEdge("imageGen","__end__");

const graph = WorkFlow.compile()
export default graph;