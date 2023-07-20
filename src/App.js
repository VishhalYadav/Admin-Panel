import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/ErrorPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  // const DUMMY_CATEGORIES = [
  //   {
  //     id: "c1",
  //     key: "1",
  //     title: "House Painters",
  //     rating: "4.84 (9.5 M bookings)",
  //     packages: [
  //       {
  //         name: "package1",
  //         avatar: "",
  //         subServices: [
  //           {
  //             name: "Tap repair",
  //             rating: "4.79 (170.7K reviews)",
  //             price: "78",
  //             time: "5 mins",
  //             including: ["Stuck or leaking tap", "UC Warranty Support"],
  //             excluding: ["Repair or reinstallion", "Warranty on spare parts"],
  //           },
  //         ],
  //       },
  //       {
  //         name: "package2",
  //         avatar: "",
  //         subServices: [
  //           {
  //             name: "Tap repair",
  //             rating: "4.79 (170.7K reviews)",
  //             price: "78",
  //             time: "5 mins",
  //             including: ["Stuck or leaking tap", "UC Warranty Support"],
  //             excluding: ["Repair or reinstallion", "Warranty on spare parts"],
  //           },
  //         ],
  //       },
  //       {
  //         name: "package3",
  //         avatar: "",
  //         subServices: [
  //           {
  //             name: "Tap repair",
  //             rating: "4.79 (170.7K reviews)",
  //             price: "78",
  //             time: "5 mins",
  //             including: ["Stuck or leaking tap", "UC Warranty Support"],
  //             excluding: ["Repair or reinstallion", "Warranty on spare parts"],
  //           },
  //         ],
  //       },
  //     ],
  //     mediaAd:
  //       "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: "c2",
  //     key: "2",
  //     title: "Home Repairs",
  //     rating: "4.84 (9.5 M bookings)",
  //     mediaAd:
  //       "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     packages: [
  //       {
  //         name: "package1",
  //         avatar: "",
  //       },
  //       {
  //         name: "package2",
  //         avatar: "",
  //       },
  //       {
  //         name: "package3",
  //         avatar: "",
  //       },
  //     ],
  //     subCategories: [
  //       {
  //         id: "c21",
  //         key: "21",
  //         title: "Electrician",
  //         rating: "4.84 (9.5 M bookings)",
  //         packages: [
  //           {
  //             name: "package1",
  //             avatar: "",
  //           },
  //           {
  //             name: "package2",
  //             avatar: "",
  //           },
  //           {
  //             name: "package3",
  //             avatar: "",
  //           },
  //         ],
  //       },
  //       {
  //         id: "c21",
  //         key: "22",
  //         title: "Plumber",
  //         rating: "4.84 (9.5 M bookings)",
  //         packages: [
  //           {
  //             name: "package1",
  //             avatar: "",
  //           },
  //           {
  //             name: "package2",
  //             avatar: "",
  //           },
  //           {
  //             name: "package3",
  //             avatar: "",
  //           },
  //         ],
  //       },
  //       {
  //         id: "c21",
  //         key: "23",
  //         title: "Carpenter",
  //         rating: "4.84 (9.5 M bookings)",
  //         packages: [
  //           {
  //             name: "package1",
  //             avatar: "",
  //           },
  //           {
  //             name: "package2",
  //             avatar: "",
  //           },
  //           {
  //             name: "package3",
  //             avatar: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: "c3",
  //     key: "3",
  //     title: "Salon for men",
  //     rating: "4.84 (9.5 M bookings)",
  //     mediaAd:
  //       "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     packages: [
  //       {
  //         name: "package1",
  //         avatar: "",
  //       },
  //       {
  //         name: "package2",
  //         avatar: "",
  //       },
  //       {
  //         name: "package3",
  //         avatar: "",
  //       },
  //     ],
  //   },
  //   {
  //     id: "c4",
  //     key: "4",
  //     title: "Women's Therapy",
  //     rating: "4.84 (9.5 M bookings)",
  //     mediaAd:
  //       "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     packages: [
  //       {
  //         name: "package1",
  //         avatar: "",
  //       },
  //       {
  //         name: "package2",
  //         avatar: "",
  //       },
  //       {
  //         name: "package3",
  //         avatar: "",
  //       },
  //     ],
  //   },
  //   {
  //     id: "c5",
  //     key: "5",
  //     title: "Men's Therapy",
  //     rating: "4.84 (9.5 M bookings)",
  //     mediaAd:
  //       "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     packages: [
  //       {
  //         name: "package1",
  //         avatar: "",
  //       },
  //       {
  //         name: "package2",
  //         avatar: "",
  //       },
  //       {
  //         name: "package3",
  //         avatar: "",
  //       },
  //     ],
  //   },
  // ];

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
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
