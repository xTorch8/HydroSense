import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
// import Cards from "../../components/Cards";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";

const ProductListPage = () => {
	let navigate = useNavigate();

	let dummyData = [
		{
			id: 1,
			name: "Mineral Cup",
			description:
				"Aqua Mineral Cup memberikan kemudahan untuk kebutuhan hidrasi Anda. Dikemas secara higienis dengan air dari sumber terbaik, menjaga kualitas dan kemurniannya hingga siap dinikmati.",
			image:
				"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//110/MTA-68556755/aqua_aqua_air_mineral_gelas_cup_220ml_-1_box_48_cup-_full01_oopjgexh.jpg",
		},
		{
			id: 2,
			name: "Galon",
			description:
				"Aqua Mineral Cup memberikan kemudahan untuk kebutuhan hidrasi Anda. Dikemas secara higienis dengan air dari sumber terbaik, menjaga kualitas dan kemurniannya hingga siap dinikmati.",
			image:
				"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//110/MTA-68556755/aqua_aqua_air_mineral_gelas_cup_220ml_-1_box_48_cup-_full01_oopjgexh.jpg",
		},
		{
			id: 3,
			name: "Mineral Bottle",
			description:
				"Aqua Mineral Cup memberikan kemudahan untuk kebutuhan hidrasi Anda. Dikemas secara higienis dengan air dari sumber terbaik, menjaga kualitas dan kemurniannya hingga siap dinikmati.",
			image:
				"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//110/MTA-68556755/aqua_aqua_air_mineral_gelas_cup_220ml_-1_box_48_cup-_full01_oopjgexh.jpg",
		},
	];

	return (
		<>
			<Navbar currentPage="Product" />

			<div className="md:flex md:flex-row md:justify-center md:items-center md:align-middle md:w-4/5 mx-auto">
				<div className="w-full md:w-3/5">
					<h1 className="text-4xl text-underline text-center md:text-right font-bold mt-8 underline"> Product List </h1>
				</div>
				<div className="w-full mt-8 md:w-2/5">
					<Button text="Add Product" isPrimary={true} align="right" />
				</div>
			</div>

			<div className="mx-auto w-1/2 mt-8 md:w-4/5">
				{dummyData.map((item) => {
					return (
						<ProductItem
							id={item.id.toString()}
							title={item.name}
							description={item.description}
							imagePath={item.image}
							onClick={() => {
								navigate("/products/detail", {
									state: {
										id: item.id,
										name: item.name,
										image: item.image,
									},
								});
							}}
						/>
						// <Cards
						// 	imagePath={item.image}
						// 	text={item.name}
						// 	key={item.id}
						// 	onClick={() => {
						// 		navigate("/products/detail", {
						// 			state: {
						// 				id: item.id,
						// 				name: item.name,
						// 				image: item.image,
						// 			},
						// 		});
						// 	}}
						// />
					);
				})}
			</div>
		</>
	);
};

export default ProductListPage;
