import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <ProductList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
