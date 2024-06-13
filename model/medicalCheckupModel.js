import mongoose from "mongoose";

const medicalCheckupSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	doctorName: {
		type: String,
		required: true
	},
	clinicName: {
		type: String,
		required: true
	},
	bloodPressure: {
		type: String,
		required: true
	},
	heartRate: {
		type: String,
		required: true
	},
	cholesterolLevel: {
		type: String,
		required: true
	},
	notes: {
		type: String,
	},

}, {timestamps:true});

export default mongoose.model("medicalCheckups", medicalCheckupSchema);