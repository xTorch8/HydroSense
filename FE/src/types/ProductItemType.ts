type ProductItemType = {
	id: string;
	imagePath: string;
	title: string;
	description: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export default ProductItemType;
