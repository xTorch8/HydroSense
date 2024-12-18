import IProductDetailForm from "../../model/IProductDetailForm";
import IRequest from "../IRequest";

type addProductRequest = IRequest & {
    name: string;
    description: string;
    image?: string;
    waterData: IProductDetailForm;
};

export default addProductRequest;