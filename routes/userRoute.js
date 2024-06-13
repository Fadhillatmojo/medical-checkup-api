import express from "express"
import { index, store, update, destroy } from "../controller/userController.js"

const userRoute = express.Router();

userRoute.get("/index", index)
userRoute.post("/store", store)
userRoute.put("/update/:id", update)
userRoute.delete("/destroy/:id", destroy)

export default userRoute;