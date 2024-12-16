import { BrowserRouter, Route, Routes } from "react-router";
import ProductListPage from "./pages/Products/ProductListPage";
import ProductDetailPage from "./pages/Products/ProductDetailPage";
import { AuthProvider } from "./context/AuthContext";
import AddProductPage from "./pages/Products/AddProductPage";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="products" element={<ProductListPage />} />
					<Route path="products/detail" element={<ProductDetailPage />} />
					<Route path="products/add" element={<AddProductPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
