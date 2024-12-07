import { BrowserRouter, Route, Routes } from "react-router";
import ProductListPage from "./pages/Products/ProductListPage";
import ProductDetailPage from "./pages/Products/ProductDetailPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="products" element={<ProductListPage />} />
				<Route path="products/detail" element={<ProductDetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
