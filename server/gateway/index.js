import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";
import { getCurrrnetUser } from "./controllers/user.controller.js";
import protect from "../gateway/middleware/auth.middleware.js";

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cookieParser());

app.use("/auth", proxy(process.env.AUTH_SERVICE));
app.use("/chat", proxy(process.env.CHAT_SERVICE));
app.get("/me", protect, getCurrrnetUser);

app.get("/", (req, res) => {
  res.json("hello from gateway");
});

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.listen(port, () => {
  console.log(`gateway started at ${port}`);
});
