import MedicalCheckUp from "../model/medicalCheckupModel.js";
import User from "../model/userModel.js";

export const index = async (req, res) => {
	try {
		const userId = req.params.userid;
		const userExist = await User.findById({_id:userId}).populate('medicalCheckups');
		if (!userExist) {
			return res.status(404).json({message: "User Not Found!"});
		}
		if (userExist.medicalCheckups.length === 0) {
			return res.status(404).json({message: "This User Doesn't Have Medical Checkup"});
		}
		return res.status(200).json({
			message: "Medical Checkup Fetched!",
			data: userExist.medicalCheckups,
		});
	} catch (error) {
		res.status(500).json({error: "Internal Server Error."})
	}
}

export const store = async (req, res) => {
	try {
		const userId = req.params.userid;
		const userExist = await User.findById({_id:userId});
		if (!userExist) {
			return res.status(404).json({message: "User Not Found!"});
		}
		const mcuData = new MedicalCheckUp({
			...req.body,
			user: userId
		});
		const savedMcu = await mcuData.save();

		// menambahkan data mcu ke dalam data user
		userExist.medicalCheckups.push(savedMcu._id);
		await userExist.save();
		return res.status(201).json({
			message: "Medical Checkup Created!",
			data: savedMcu,
		});
	} catch (error) {
		res.status(500).json({error: "Internal Server Error."})
	}
}