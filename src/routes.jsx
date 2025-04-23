import App from "./App";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <ErrorPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
