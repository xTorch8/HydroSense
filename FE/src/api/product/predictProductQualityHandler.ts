import axios from "axios";
import predictProductQualityRequest from "../../types/api/product/predictProductQualityRequest";
import API_PATH from "../API_PATH";

const predictProductQualityHandler = async (request: predictProductQualityRequest) => {
	try {
		const response = await axios.post(
			`${API_PATH}/product/predict/`,
			{
				pH: request.pH,
				Iron: request.iron,
				Nitrate: request.nitrate,
				Chloride: request.chloride,
				Lead: request.lead,
				Turbidity: request.turbidity,
				Fluoride: request.flouride,
				Copper: request.copper,
				Odor: request.odor,
				Sulfate: request.sulfate,
				Chlorine: request.chlorine,
				Manganese: request.manganese,
				Total_Dissolved_Solids: request.totalDissolvedSolids,
				ProductID: request.productId,
			},
			{
				headers: {
					Authorization: `Bearer ${request.token}`,
				},
			}
		);

		return response.data;
	} catch (e) {
		return e;
	}
};

export default predictProductQualityHandler;
