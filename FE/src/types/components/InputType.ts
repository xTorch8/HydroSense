type InputType = {
	id: string;
	name: string;
	label: string;
	type: "text" | "number" | "email" | "image" | "textarea";
	placeholder?: string;
	width?: string;
	isDisabled?: boolean;
	value?: string | number;
	ref?: React.Ref<HTMLInputElement>;
	onChange?: () => {};
	color?: "black" | "white";
	imageHeight?: number;
};

export default InputType;
