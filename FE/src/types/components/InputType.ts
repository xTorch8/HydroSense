type InputType = {
	id: string;
	name: string;
	label: string;
	type: "text" | "number" | "email" | "image";
	placeholder?: string;
	width?: string;
	isDisabled?: boolean;
	value?: string | number;
	ref?: React.Ref<HTMLInputElement>
	onChange?: () => {};
};

export default InputType;
