import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/ErrorPage";

import CategoryPage from "./components/CategoryPage/CategoryPage";
import CategoryDetails from "./components/CategoryPage/CategoryDetails";
import CartPage from "./components/Cart/CartPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="/:categoryId/categories"
          element={<CategoryPage />}
          exact
        />
        <Route
          path="/:categoryId/categories/:serviceId/details"
          element={<CategoryDetails />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
