import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import InputType from "../types/components/InputType";

const Input = (props: InputType) => {
	if (props.type != "image") {
		return (
			<div className="flex flex-col">
				<label className="text-md font-semibold" htmlFor={props.id}>
					{props.label}:
				</label>
				<input
					className="px-4 py-2 rounded-2xl bg-white border-4 border-biru2 mt-2 text-black"
					id={props.id}
					name={props.name}
					type={props.type}
					placeholder={props.placeholder}
					onChange={props.onChange}
					ref={props.ref}
				/>
			</div>
		);
	} else {
		const location = useLocation();
		const { image } = location.state || {};
		const [productImage, setImage] = useState<string | undefined>(image);

		useEffect(() => {
			if (image) {
				setImage(image);
			}
		}, []);

		const imageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = () => {
					if (typeof reader.result === "string") {
						setImage(reader.result);
					}
				};
				reader.readAsDataURL(file);
			}
		};

		return (
			<div className="flex flex-col row-span-2">
				<label className="text-lg font-semibold" htmlFor={props.id}>
					{props.label}:
				</label>
				<div
					className="rounded-2xl bg-white border-4 border-biru2 mt-2 text-black cursor-pointer"
					onClick={() => {
						document.getElementById(props.id)?.click();
					}}
				>
					<img src={productImage} className="rounded-2xl h-[8.5rem] block mx-auto" />
				</div>
				<input
					className="hidden"
					id={props.id}
					name={props.name}
					type="file"
					accept=".png,.jpg,.jpeg"
					onChange={imageChangeHandler}
					ref={props.ref}
				/>
			</div>
		);
	}
};

export default Input;
