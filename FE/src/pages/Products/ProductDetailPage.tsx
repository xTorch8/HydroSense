import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import backButton from "../../assets/back_button.png";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import HistoryItem from "../../components/HistoryItem";

const ProductDetailPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { id, name, image } = location.state || {};

	if (id == undefined || name == undefined || image == undefined) {
		useEffect(() => {
			navigateBackHandler();
		});

		return null;
	}

	const navigateBackHandler = () => {
		navigate("/products");
	};

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

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-4/5 mx-auto mt-8">
				<Input label="pH" id="input-pH" name="pH" type="number" placeholder="7.2" />
				<Input label="Lead (mg/L)" id="input-lead" name="lead" type="number" placeholder="0.003" />
				<Input label="Odor" id="input-odor" name="odor" type="number" placeholder="Tidak terdeteksi" />
				<Input label="Total Dissolved Solids (mg/L)" id="input-tds" name="total_dissolved_solids" type="number" placeholder="200" />
				<Input label="Iron (mg/L)" id="input-iron" name="iron" type="number" placeholder="0.15" />
				<Input label="Turbidity (NTU)" id="input-turbidity" name="turbidity" type="number" placeholder="0.5" />
				<Input label="Sulfate (mg/L)" id="input-lead" name="lead" type="number" placeholder="25" />
				<Input label="Water Quality" id="input-water_quality" name="water_quality" type="number" placeholder="66%" />
				<Input label="Nitrate (mg/L)" id="input-nitrate" name="nitrate" type="number" placeholder="3.0" />
				<Input label="Flouride (mg/L)" id="input-flouride" name="flouride" type="number" placeholder="0.7" />
				<Input label="Chlorine (mg/L)" id="input-chlorine" name="chlorine" type="number" placeholder="0.5" />
				<Input label="Image" id="input-image" name="image" type="image" />
				<Input label="Chloride (mg/L)" id="input-chloride" name="flouride" type="number" placeholder="20" />
				<Input label="Copper (mg/L)" id="input-copper" name="copper" type="number" placeholder="0.1" />
				<Input label="Manganese (mg/L)" id="input-manganese" name="manganese" type="number" placeholder="0.05" />
			</div>

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
