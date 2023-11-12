import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import banner from "../images/Banner.jpg";
import background from "../images/background.jpg";
import CartIcon from "../cart/CartIcon";
import { useSelector } from "react-redux";

function AppLayout() {
  const location = useLocation();
  const isInIntro = location.pathname === "/";
  const isInCart = location.pathname === "/Cart";
  const loginValid = useSelector((state) => state.user.username).length !== 0;

  return isInIntro ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
      }}
      className="min-h-screen bg-cover bg-center bg-no-repeat pb-10 md:h-full"
    >
      <Navbar /> <Outlet />
    </div>
  ) : (
    <div style={{ backgroundImage: `url(${background})` }}>
      {loginValid && !isInCart && <CartIcon />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
