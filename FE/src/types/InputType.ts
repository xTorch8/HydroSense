type InputType = {
	id: string;
	name: string;
	label: string;
	type: "text" | "number" | "email" | "image";
	placeholder?: string;
	width?: string;
	isDisabled?: boolean;
	onChange?: () => {};
};

export default InputType;
