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
WorkFlow.addConditionalEdges("router",router)
