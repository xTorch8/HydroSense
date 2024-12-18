import axios from "axios";
import addProductRequest from "../../types/api/product/addProductRequest";
import API_PATH from "../API_PATH";

const addProductHandler = async (request: addProductRequest) => {
	try {
		const formData = new FormData();

		formData.append("Name", request.name);
		formData.append("Description", request.description);

		if (request.image) {
			formData.append("image", request.image);
		}

		const waterData = JSON.stringify({
			pH: request.waterData.pH,
			lead: request.waterData.lead,
			odor: request.waterData.odor,
			totalDissolvedSolids: request.waterData.totalDissolvedSolids,
			iron: request.waterData.iron,
			turbidity: request.waterData.turbidity,
			sulfate: request.waterData.sulfate,
			nitrate: request.waterData.nitrate,
			flouride: request.waterData.flouride,
			chlorine: request.waterData.chlorine,
			chloride: request.waterData.chloride,
			copper: request.waterData.copper,
			manganese: request.waterData.manganese,
		});

		formData.append("water_data", waterData);

		const response = await axios.post(`${API_PATH}/product/save/`, formData, {
			headers: {
				Authorization: `Bearer ${request.token}`,
				"Content-Type": "multipart/form-data",
			},
		});

		console.log(response);

		return response.data;
	} catch (e) {
		console.log(e);
		return e;
	}
};

export default addProductHandler;
