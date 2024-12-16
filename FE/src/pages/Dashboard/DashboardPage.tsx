import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";

const DashboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [productHistory, setProductHistory] = useState<any[]>([]);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!authContext?.token) navigate("../auth/login");

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          "https://apihydrosense.nextora.my.id/dashboard/leaderboard",
          { headers: { Authorization: `Bearer ${authContext?.token}` } }
        );
        setLeaderboard(response.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      }
    };
    fetchLeaderboard();
  }, [authContext?.token]);

  // Fetch product history for selected company
  useEffect(() => {
    const fetchProductHistory = async () => {
      if (selectedCompany) {
        try {
          const response = await axios.get(
            `https://apihydrosense.nextora.my.id/dashboard/company/${selectedCompany}/history`,
            { headers: { Authorization: `Bearer ${authContext?.token}` } }
          );
          setProductHistory(response.data);
        } catch (error) {
          console.error("Failed to fetch product history:", error);
        }
      }
    };
    fetchProductHistory();
  }, [selectedCompany, authContext?.token]);

  return (
    <>
      <Navbar currentPage="Dashboard" />
      <div className="container mx-auto p-8">
        {/* Leaderboard Section */}
        <h1 className="text-4xl font-bold text-center mb-6 underline">Leaderboard</h1>
        <ul className="bg-blue-50 rounded-lg shadow-md divide-y">
          {leaderboard.map((company, index) => (
            <li
              key={company.company_id}
              onClick={() => setSelectedCompany(company.company_id)}
              className={`p-4 flex justify-between items-center cursor-pointer 
                ${
                  selectedCompany === company.company_id
                    ? "bg-blue-200"
                    : index === 0
                    ? "bg-gold"
                    : index === 2
                    ? "bg-bronze"
                    : "bg-blue"
                }`}
            >
              <div className="flex items-center">
                {/* Company Logo */}
                <img
                  src={`/images/company_logo_${company.company_id}.png`} // Replace with actual path
                  alt={`${company.company_name} Logo`}
                  className="w-8 h-8 mr-4"
                />
                <span className="font-semibold">{company.company_name}</span>
              </div>
              <span>Clean Count: {company.clean_count}</span>
            </li>
          ))}
        </ul>

        {/* Product History Section */}
        <h2 className="text-3xl font-semibold mt-8 mb-4 text-center underline">Your History</h2>
        <table className="w-full table-auto shadow-md">
          <thead>
            <tr className="bg-darkblue text-white">
              <th className="p-3"></th> {/* For Checkmark/Crossmark */}
              <th className="p-3"></th>
              <th className="p-3"></th>
              <th className="p-3"></th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {productHistory.map((product, index) => (
              <tr
                key={product.product_id}
                className={`${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                {/* Checkmark or Crossmark */}
                <td className="p-3 text-center">
                  {product.status === "Clean" ? (
                    <img
                      src="/images/checkmark.png" // Replace with checkmark image path
                      alt="Clean"
                      className="w-6 h-6 mx-auto"
                    />
                  ) : (
                    <img
                      src="/images/crossmark.png" // Replace with crossmark image path
                      alt="Dirty"
                      className="w-6 h-6 mx-auto"
                    />
                  )}
                </td>
                <td className="p-3 text-center">{product.time}</td>
                <td className="p-3 text-center">{product.date}</td>
                <td className="p-3 text-center">{product.product_name}</td>
                <td
                  className={`p-3 text-center font-semibold ${
                    product.status === "Clean" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardPage;


