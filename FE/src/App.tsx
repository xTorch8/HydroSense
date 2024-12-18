import { BrowserRouter, Route, Routes } from "react-router";
import ProductListPage from "./pages/Products/ProductListPage";
import ProductDetailPage from "./pages/Products/ProductDetailPage";
// import DashboardPage from "./pages/Dashboard/DashboardPage";
import { AuthProvider } from "./context/AuthContext";
import AddProductPage from "./pages/Products/AddProductPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage/>} />
					<Route path="products" element={<ProductListPage />} />
					<Route path="products/detail" element={<ProductDetailPage />} />
					<Route path="products/add" element={<AddProductPage />} />
					{/* <Route path="dashboard" element={<DashboardPage />} /> */}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
