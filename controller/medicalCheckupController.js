import MedicalCheckUp from "../model/medicalCheckupModel";

export const index = async (req, res) => {
	try {
		const users = await User.find();
		if (users.length === 0) {
			return res.status(404).json({message: "User is Empty."});
		}
		return res.status(200).json({
			message: "User Fetched!",
			data: users,
		});
	} catch (error) {
		res.status(500).json({error: "Internal Server Error."})
	}
}