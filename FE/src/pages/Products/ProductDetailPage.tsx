import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import backButton from "../../assets/back_button.png";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import HistoryItem from "../../components/HistoryItem";
import { AuthContext } from "../../context/AuthContext";
import IAddProductForm from "../../types/model/IAddProductForm";

const ProductDetailPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { id, name, image } = location.state || {};

	const authContext = useContext(AuthContext);

	const navigateBackHandler = () => {
		navigate("/products");
	};

	if (id == undefined || name == undefined || image == undefined || authContext == null || authContext.isTokenValidHandler() == false) {
		useEffect(() => {
			navigateBackHandler();
		});

		return null;
	}

	const dummyHistoryList = [
		{
			id: 1,
			time: "08.30 PM",
			date: "2024-09-30",
			isClean: true,
		},
		{
			id: 2,
			time: "06.28 AM",
			date: "2024-09-18",
			isClean: false,
		},
		{
			id: 3,
			time: "02.20 PM",
			date: "2024-09-05",
			isClean: true,
		},
	];

	const [formState, setFormState] = useState<IAddProductForm>({
		productName: "",
		productDescription: "",
		productImage: "",
		pH: undefined,
		lead: undefined,
		odor: undefined,
		totalDissolvedSolids: undefined,
		iron: undefined,
		turbidity: undefined,
		sulfate: undefined,
		nitrate: undefined,
		flouride: undefined,
		chlorine: undefined,
		chloride: undefined,
		copper: undefined,
		manganese: undefined,
	});

	const formChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;

		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const [error, setError] = useState<string[]>([]);

	const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();

		let errorList = [];

		let validationMap = {
			pH: [2, 12],
			iron: [0, 16],
			nitrate: [0, 73],
			chloride: [34, 1321],
			lead: [0, 3.5],
			zinc: [0, 24],
			turbidity: [0, 18],
			fluoride: [0, 12],
			copper: [0, 11],
			odor: [0, 4],
			sulfate: [12, 1393],
			conductivity: [13, 1891],
			chlorine: [1, 10],
			manganese: [1, 23],
			totalDissolvedSolids: [0, 579],
		};

		for (let [name, range] of Object.entries(validationMap)) {
			if (formState[name as keyof typeof formState] != undefined) {
				const value = formState[name as keyof typeof formState];

				console.log(name, range, value, typeof value);

				if (value != undefined && typeof value == "string") {
					if (+value < range[0] || +value > range[1]) {
						console.log("P");
						errorList.push(`${name} must be between ${range[0]} and ${range[1]}!`);
					}
				}
			} else {
				errorList.push(`${name} must be filled!`);
			}
		}

		if (errorList.length == 0) {
		} else {
			setError(errorList);
		}
	};

	return (
		<>
			<Navbar currentPage="Product" />

			<div className="flex flex-row md:justify-center md:items-center md:align-middle md:w-4/5 mx-auto">
				<div className="w-5/6 md:w-3/5">
					<h1 className="text-4xl text-underline text-center md:text-right font-bold mt-8 underline"> {name} </h1>
				</div>
				<div className="mt-8 w-1/6 md:w-2/5">
					<img src={backButton} className="block md:float-right cursor-pointer" onClick={navigateBackHandler} />
				</div>
			</div>

			<form onSubmit={submitHandler}>
				<div className="mt-8 mx-auto w-4/5">
					<Input id="input-description" name="description" label="Description" type="text" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-4/5 mx-auto mt-2">
					<Input label="pH" id="input-pH" name="pH" type="number" placeholder="7.2" value={formState.pH} onChange={formChangeHandler} color="black" />
					<Input
						label="Lead (mg/L)"
						id="input-lead"
						name="lead"
						type="number"
						placeholder="0.003"
						value={formState.lead}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Odor"
						id="input-odor"
						name="odor"
						type="number"
						placeholder=""
						value={formState.odor}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Total Dissolved Solids (mg/L)"
						id="input-tds"
						name="total_dissolved_solids"
						type="number"
						placeholder="200"
						color="black"
						value={formState.totalDissolvedSolids}
						onChange={formChangeHandler}
					/>
					<Input
						label="Iron (mg/L)"
						id="input-iron"
						name="iron"
						type="number"
						placeholder="0.15"
						value={formState.iron}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Turbidity (NTU)"
						id="input-turbidity"
						name="turbidity"
						type="number"
						placeholder="0.5"
						value={formState.turbidity}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Sulfate (mg/L)"
						id="input-lead"
						name="lead"
						type="number"
						placeholder="25"
						value={formState.sulfate}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Sulfate (mg/L)"
						id="input-lead"
						name="lead"
						type="number"
						placeholder="66%"
						value={formState.sulfate}
						color="black"
						isDisabled={true}
					/>

					<Input
						label="Nitrate (mg/L)"
						id="input-nitrate"
						name="nitrate"
						type="number"
						placeholder="3.0"
						value={formState.nitrate}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Flouride (mg/L)"
						id="input-flouride"
						name="flouride"
						type="number"
						placeholder="0.7"
						value={formState.flouride}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Chlorine (mg/L)"
						id="input-chlorine"
						name="chlorine"
						type="number"
						placeholder="0.5"
						value={formState.chlorine}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						id="input-image"
						name="productImage"
						label="Image (Opsional)"
						type="image"
						color="black"
						// value={formState.productImage}
						onChange={formChangeHandler}
					/>
					<Input
						label="Chloride (mg/L)"
						id="input-chloride"
						name="flouride"
						type="number"
						placeholder="20"
						value={formState.chloride}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Copper (mg/L)"
						id="input-copper"
						name="copper"
						type="number"
						placeholder="0.1"
						value={formState.copper}
						onChange={formChangeHandler}
						color="black"
					/>
					<Input
						label="Manganese (mg/L)"
						id="input-manganese"
						name="manganese"
						type="number"
						placeholder="0.05"
						value={formState.manganese}
						onChange={formChangeHandler}
						color="black"
					/>
				</div>
			</form>

			<div className="w-4/5 mx-auto flex flex-row justify-end space-x-4 mt-8">
				<div>
					<Button text="Check Water Quality" />
				</div>
				<div>
					<Button text="Edit" isPrimary={false} />
				</div>
				<div>
					<Button text="Delete" isPrimary={false} />
				</div>
			</div>

			{error.length > 0 ? <p className="w-4/5 mx-auto pl-4 mt-8 text-black font-extrabold"> Error: </p> : <></>}

			{error.map((e, index) => {
				return (
					<p className="text-black w-4/5 mx-auto pl-4 mt-2" key={index}>
						- {e}
					</p>
				);
			})}

			<h1 className="text-4xl text-underline text-center font-bold mt-12 underline"> Product History </h1>

			<div className="w-4/5 mx-auto my-8">
				{dummyHistoryList.map((item) => {
					return <HistoryItem isClean={item.isClean} time={item.time} date={item.date} name={name} key={item.id} />;
				})}
			</div>
		</>
	);
};

export default ProductDetailPage;
