import { useNavigate } from "react-router";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRef, useState } from "react";

const AddProductPage = () => {
	const navigate = useNavigate();

	const pageStyle = {
		backgroundColor: "#002B58",
		minHeight: "100vh",
	};

	const [step, setStep] = useState<number>(2);

	const formDataRef = useRef({
		productName: null,
		productDescription: null,
		productImage: null,
		pH: null,
		lead: null,
		odor: null,
		totalDissolvedSolids: null,
		iron: null,
		turbidity: null,
		sulfate: null,
		nitrate: null,
		flouride: null,
		chlorine: null,
		image: null,
		chloride: null,
		copper: null,
		manganese: null,
	});

	const step1 = (
		<>
			<div className="w-4/5 flex flex-col md:flex-row mx-auto mt-16 justify-center items-stretch">
				<div className="w-full md:w-1/2 mx-4">
					<Input
						id="input-name"
						name="name"
						label="Product Name"
						type="text"
						color="white"
						placeholder="....."
						ref={formDataRef.current.productName}
					/>
					<br></br>
					<Input id="input-description" name="description" label="Product Description" type="textarea" color="white" placeholder="....." />
				</div>
				<div className="w-full md:w-1/2 mx-4 mt-4 md:mt-0">
					<Input
						id="input-image"
						name="image"
						label="Image (Opsional)"
						type="image"
						color="white"
						imageHeight={20}
						ref={formDataRef.current.productImage}
					/>
				</div>
			</div>
		</>
	);

	const step2 = (
		<>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-4/5 mx-auto mt-8">
				<Input label="pH" id="input-pH" name="pH" type="number" placeholder="7.2" ref={formDataRef.current.pH} color="white" />
				<Input label="Lead (mg/L)" id="input-lead" name="lead" type="number" placeholder="0.003" ref={formDataRef.current.lead} color="white" />
				<Input label="Odor" id="input-odor" name="odor" type="number" placeholder="" ref={formDataRef.current.odor} color="white" />
				<Input
					label="Total Dissolved Solids (mg/L)"
					id="input-tds"
					name="total_dissolved_solids"
					type="number"
					placeholder="200"
					color="white"
					ref={formDataRef.current.totalDissolvedSolids}
				/>
				<Input label="Iron (mg/L)" id="input-iron" name="iron" type="number" placeholder="0.15" ref={formDataRef.current.iron} color="white" />
				<Input
					label="Turbidity (NTU)"
					id="input-turbidity"
					name="turbidity"
					type="number"
					placeholder="0.5"
					ref={formDataRef.current.turbidity}
					color="white"
				/>
				<Input label="Sulfate (mg/L)" id="input-lead" name="lead" type="number" placeholder="25" ref={formDataRef.current.sulfate} color="white" />
				<Input
					label="Nitrate (mg/L)"
					id="input-nitrate"
					name="nitrate"
					type="number"
					placeholder="3.0"
					ref={formDataRef.current.nitrate}
					color="white"
				/>
				<Input
					label="Flouride (mg/L)"
					id="input-flouride"
					name="flouride"
					type="number"
					placeholder="0.7"
					ref={formDataRef.current.flouride}
					color="white"
				/>
				<Input
					label="Chlorine (mg/L)"
					id="input-chlorine"
					name="chlorine"
					type="number"
					placeholder="0.5"
					ref={formDataRef.current.chlorine}
					color="white"
				/>
				<Input
					label="Chloride (mg/L)"
					id="input-chloride"
					name="flouride"
					type="number"
					placeholder="20"
					ref={formDataRef.current.chloride}
					color="white"
				/>
				<Input label="Copper (mg/L)" id="input-copper" name="copper" type="number" placeholder="0.1" ref={formDataRef.current.copper} color="white" />
				<Input
					label="Manganese (mg/L)"
					id="input-manganese"
					name="manganese"
					type="number"
					placeholder="0.05"
					ref={formDataRef.current.manganese}
					color="white"
				/>
			</div>
		</>
	);

	return (
		<div className="p-8" style={pageStyle}>
			<p
				className="text-white float-right cursor-pointer"
				onClick={() => {
					navigate("../products");
				}}
			>
				X
			</p>

			<h1 className="text-4xl underline text-white font-extrabold block text-center mt-8"> Product Data </h1>

			{step == 1 ? step1 : step2}

			<div className="w-[85%] md:w-[78%] mx-auto flex flex-row justify-end space-x-4 mt-16">
				<div>
					<Button text={step == 1 ? "Cancel" : "Previous"} isPrimary={false} />
				</div>
				<div>
					<Button text={step == 1 ? "Next" : "Submit"} isPrimary={true} />
				</div>
			</div>
		</div>
	);
};

export default AddProductPage;
