import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Contact, { action as contactAction } from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Login, { signAction } from "./pages/Login";
import Logout from "./pages/Logout";
import Cart from "./cart/cart";
import Order, { orderAction } from "./order/Order";
import OrderCheck, { loader as orderGet } from "./order/OrderCheck";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Intro />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <Order />,
        action: orderAction,
      },
      {
        path: "/order/:orderId",
        element: <OrderCheck />,
        loader: orderGet,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
        action: contactAction,
      },
      {
        path: "/Login",
        element: <Login />,
        action: signAction,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
