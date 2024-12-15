type ButtonTypes = {
	text: string;
	isPrimary?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	align?: "left" | "center" | "right"
};

export default ButtonTypes;
