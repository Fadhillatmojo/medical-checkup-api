import express from "express"
import { index, store } from "../controller/medicalCheckupController.js"

const medicalCheckupRoute = express.Router();

medicalCheckupRoute.get("/index/:userid", index);
medicalCheckupRoute.post("/store/:userid", store);

export default medicalCheckupRoute;