import ButtonTypes from "../types/ButtonType";

const Button = (props: ButtonTypes) => {
	if (props.isPrimary == null || props.isPrimary == true) {
		return (
			<button onClick={props.onClick} className="bg-biru5 rounded-lg block mx-auto px-4 py-2 text-white border-biru1 border-2 font-semibold">
				{props.text}
			</button>
		);
	} else {
		return (
			<button onClick={props.onClick} className="bg-biru2 rounded-lg block mx-auto px-4 py-2 text-black font-semibold">
				{props.text}
			</button>
		);
	}
};

export default Button;
