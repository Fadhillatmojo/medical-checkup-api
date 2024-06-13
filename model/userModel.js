import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	address:{
		type: String,
		required: true
	},
	gender: {
		type: String,
		enum: ["Male", "Female"],
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	medicalCheckups: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "medicalCheckups"
		}
	]
}, {timestamps: true});

export default mongoose.model("users", userSchema);