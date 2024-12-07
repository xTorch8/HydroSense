import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Button from "../components/Button";

const ProductListPage = () => {
	let dummyData = [
		{
			name: "Mineral Cup",
			image:
				"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//110/MTA-68556755/aqua_aqua_air_mineral_gelas_cup_220ml_-1_box_48_cup-_full01_oopjgexh.jpg",
		},
		{
			name: "Galon",
			image:
				"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//110/MTA-68556755/aqua_aqua_air_mineral_gelas_cup_220ml_-1_box_48_cup-_full01_oopjgexh.jpg",
		},
		{
			name: "Mineral Bottle",
			image:
				"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//110/MTA-68556755/aqua_aqua_air_mineral_gelas_cup_220ml_-1_box_48_cup-_full01_oopjgexh.jpg",
		},
	];

	return (
		<>
			<Navbar currentPage="Product" />

			<div className="md:flex md:flex-row md:justify-center md:items-center md:align-middle">
				<div className="w-full md:w-3/5">
					<h1 className="text-4xl text-underline text-center md:text-right font-bold mt-8 underline"> Product List </h1>
				</div>
				<div className="w-full mt-8 md:w-2/5">
					<Button text="Add Product" isPrimary={true} />
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto w-1/2 mt-8 md:w-4/5">
				{dummyData.map((item, index) => {
					return <Cards imagePath={item.image} text={item.name} key={index} />;
				})}
			</div>
		</>
	);
};

export default ProductListPage;
