import { BrowserRouter, Route, Routes } from "react-router";
import ProductListPage from "./pages/Products/ProductListPage";
import ProductDetailPage from "./pages/Products/ProductDetailPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="products" element={<ProductListPage />} />
					<Route path="products/detail" element={<ProductDetailPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
