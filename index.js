import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import medicalCheckupRoute from "./routes/medicalCheckupRoute.js"

// menginisalisasi express app
const app = express();

// menginisialisasi hal hal di dalam file .env
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

// mengconnect kan kepada mongodb database
mongoose.connect(MONGOURL).then(() => {
	console.log("Database Connected.")
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`)
	})
}).catch((error) => console.log(error));

// memakai route user
app.use("/api/user", userRoute);
app.use("/api/mcu", medicalCheckupRoute);