import { BrowserRouter, Route, Routes } from "react-router";
import ProductListPage from "./pages/ProductListPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="products" element={<ProductListPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
