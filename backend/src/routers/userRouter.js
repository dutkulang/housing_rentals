import express from "express"
import { getAllUsers, getAUser, deleteAUser } from "../controllers/user.js";
const userRouter = express.Router()
import checkUserId from "../middleware/userId.js";

userRouter.get("", getAllUsers);
userRouter.get("/:userId", checkUserId, getAUser)
userRouter.delete("/:userId", checkUserId, deleteAUser)


export default userRouter;