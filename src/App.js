import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/ErrorPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  const DUMMY_CATEGORIES = [
    {
      id: "c1",
      key: "1",
      title: "House Painters",
    },
    {
      id: "c2",
      key: "2",
      title: "Home Repairs",
      subCategories: [
        { id: "c21", key: "21", title: "Electrician" },
        { id: "c21", key: "22", title: "Plumber" },
        { id: "c21", key: "23", title: "Carpenter" },
      ],
    },
    {
      id: "c3",
      key: "3",
      title: "Salon for men",
    },
    {
      id: "c4",
      key: "4",
      title: "Women's Therapy",
    },
    {
      id: "c5",
      key: "5",
      title: "Men's Therapy",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<HomePage categories={DUMMY_CATEGORIES} />}
        />
        <Route
          path="/:categoryId/categories"
          element={<CategoryPage />}
          exact
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
