import express from "express"
import { index, store, update, destroy } from "../controller/medicalCheckupController.js"

const medicalCheckupRoute = express.Router();

medicalCheckupRoute.get("/index/:userid", index);
medicalCheckupRoute.post("/store/:userid", store);
medicalCheckupRoute.put("/update/:id", update);
medicalCheckupRoute.delete("/destroy/:id", destroy);

export default medicalCheckupRoute;