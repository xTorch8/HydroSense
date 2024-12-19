import IProductDetailForm from "../../model/IProductDetailForm";
import IRequest from "../IRequest";

type predictProductQualityRequest = IRequest &
	IProductDetailForm & {
		productId: string;
	};

export default predictProductQualityRequest;
