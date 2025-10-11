import express from "express";
const authRouter = express.Router()
import { login, signup } from "../controllers/auth.js";
import loginChecker from "../middleware/loginchecker.js";
import signupChecker from "../middleware/signupChecker.js";

authRouter.post("/signup", signupChecker, signup);

authRouter.post("/login", loginChecker, login );

export default authRouter;