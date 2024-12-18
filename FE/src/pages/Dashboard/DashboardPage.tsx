import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
// import getLeaderboardHandler from "../../api/dashboard/getLeaderboardHandler";
import axios from "axios";
import Navbar from "../../components/Navbar";
import defaultImage from "../../assets/default_pfp.png";
import correctIcon from "../../assets/correct_icon.png";
import wrongIcon from "../../assets/wrong_icon.png";
import goldMedal from "../../assets/gold_medal.png";
import silverMedal from "../../assets/silver_medal.png";
import bronzeMedal from "../../assets/bronze_medal.png";

const DashboardPage = () => {
	const navigate = useNavigate();
	const authContext = useContext(AuthContext);

	const [leaderboard, setLeaderboardData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [expandedCompany, setExpandedCompany] = useState<number | null>(null);
	const [companyProducts, setCompanyProducts] = useState<Record<number, any[]>>({});

	const [history, setHistory] = useState<any[]>([]);

	// const defaultImage = "/assets/default_pfp.png";
	// const medalImages = {
	// 	gold: "/assets/gold_medal.png",
	// 	silver: "/assets/silver_medal.png",
	// 	bronze: "/assets/bronze_medal.png",
	// };
	// const icons = {
	// 	correct: "/assets/correct_icon.png",
	// 	wrong: "/assets/wrong_icon.png",
	// };

	useEffect(() => {
		const validateAndFetchData = async () => {
			if (authContext == null || authContext.isTokenValidHandler() == false) {
				navigate("../login");
				return;
			}

			// const isValid = await authContext.isTokenValidHandler();
			// if (!isValid) {
			//     navigate("../auth/login");
			//     return;
			// }

			try {
				// const response = await getLeaderboardHandler({
				//     token: authContext.token,
				// });

				// if (axios.isAxiosError(response)) {
				//     console.error("Error fetching leaderboard:", response.message);
				//     if (response.status === 401) {
				//         navigate("../auth/login");
				//     }
				// } else {
				//     setLeaderboardData(response);
				// }

				const leaderboardResponse = await axios.get("https://api.hydrosense.nextora.my.id/dashboard/leaderboard", {
					headers: { Authorization: `Bearer ${authContext.token}` },
				});

				const historyResponse = await axios.get("https://api.hydrosense.nextora.my.id/dashboard/company/history", {
					headers: { Authorization: `Bearer ${authContext.token}` },
				});

				setLeaderboardData(leaderboardResponse.data);
				setHistory(historyResponse.data);
			} catch (error) {
				if (axios.isAxiosError(error)) {
					if (error.status == 401) {
						navigate("../login");
					}
				}
				// console.error("Unexpected error:", error);
				setLeaderboardData([]);
				setHistory([]);
			} finally {
				setIsLoading(false);
			}
		};

		validateAndFetchData();
	}, []);

	const toggleCompanyProducts = async (companyId: number) => {
		if (expandedCompany === companyId) {
			setExpandedCompany(null);
			return;
		}

		if (!companyProducts[companyId]) {
			try {
				const response = await axios.get(`https://api.hydrosense.nextora.my.id/dashboard/company/${companyId}/products`, {
					headers: { Authorization: `Bearer ${authContext?.token}` },
				});
				setCompanyProducts((prev) => ({ ...prev, [companyId]: response.data }));
			} catch (error) {
				console.error("Error fetching company products:", error);
			}
		}
		setExpandedCompany(companyId);
	};

	return (
		<>
			<Navbar currentPage="Dashboard" />
			<h1 className="text-4xl font-bold text-center mt-8 underline">Leaderboard</h1>

			{isLoading ? (
				<p className="text-center mt-4 animate-pulse">Loading...</p>
			) : (
				<div className="container mx-auto p-8">
					<ul className="rounded-lg shadow-md divide-y">
						{leaderboard
							.sort((a, b) => b.clean_count / b.total_products - a.clean_count / a.total_products)
							.map((company, index) => {
								let blockColor =
									index === 0
										? "bg-gold hover:bg-darkblue hover:text-white focus-within:bg-darkblue focus-within:text-white"
										: index === 1
										? "bg-silver hover:bg-darkblue hover:text-white focus-within:bg-darkblue focus-within:text-white"
										: index === 2
										? "bg-bronze hover:bg-darkblue hover:text-white focus-within:bg-darkblue focus-within:text-white"
										: "bg-biru2 hover:bg-darkblue hover:text-white focus-within:bg-darkblue focus-within:text-white";

								blockColor += " p-4 cursor-pointer transition duration-300 ease-in-out hover:opacity-100";

								const medal = index === 0 ? goldMedal : index === 1 ? silverMedal : index === 2 ? bronzeMedal : null;

								console.log(blockColor);
								return (
									<div key={company.company_id} className={blockColor} onClick={() => toggleCompanyProducts(company.company_id)}>
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-4">
												{/* Icon Ranking */}
												{medal ? (
													<img src={medal} alt="medal" className="w-6 h-6 rounded-full border-2 border-darkblue" />
												) : (
													<span className="bg-white text-black px-2 py-1 rounded-full">{index + 1}</span>
												)}

												{/* PFP Company */}
												<img src={company.image_url || defaultImage} alt={company.company_name} className="w-10 h-10 object-cover rounded-full" />

												{/* Nama Company */}
												<span className="font-bold text-lg">{company.company_name}</span>
											</div>

											{/* Dropdown Button */}
											<button className={`transition-transform duration-300 ${expandedCompany === company.company_id ? "rotate-180" : "rotate-0"}`}>
												▼
											</button>
										</div>

										{/* Bagian Dropdown */}
										{expandedCompany === company.company_id && (
											<div className="mt-2 bg-blue-100 rounded-lg p-2">
												{companyProducts[company.company_id]?.map((product) => (
													<div key={product.product_id} className="flex justify-between items-center px-2">
														<span className="text-darkblue font-semibold">{product.product_name}</span>
														<span className="text-darkblue font-semibold">{product.result}</span>
													</div>
												))}
												<div className="bg-darkblue text-white p-2 mt-2 rounded-lg">
													<span>Rata-Rata: </span>
													<strong>
														{companyProducts[company.company_id]
															? ((company.clean_count / companyProducts[company.company_id].length) * 100).toFixed(2) + "%" + " Clean"
															: "0%"}
													</strong>
												</div>
											</div>
										)}
									</div>
								);
							})}
					</ul>
				</div>
			)}

			{/* History */}
			<h2 className="text-3xl font-bold text-center mt-12 underline">Product Check History</h2>
			<div className="mx-auto w-4/5 mt-8">
				<table className="w-full border-collapse border text-white bg-darkblue size-16 font-semibold">
					<tbody>
						{history.map((item) => (
							<tr key={item.product_id} className="border-b text-center text-lg">
								<td className="text-center">
									<img src={item.result === "Clean" ? correctIcon : wrongIcon} alt={item.result} className="w-6 h-6 inline-block" />
								</td>
								<td className="text-center">{item.time}</td>
								<td className="text-center">{item.date}</td>
								<td className="text-center">{item.product_name}</td>
								<td className="text-center">{item.result}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default DashboardPage;
