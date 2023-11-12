import { useNavigate } from "react-router-dom";
import store from "../store";
import { reset } from "../user/userSlice";
import { useEffect } from "react";
import { clearCart } from "../cart/cartSlice";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    store.dispatch(reset());
    store.dispatch(clearCart());
    navigate("/");
  }, [navigate]);
  return <div>Logging you out...</div>;
}

export default Logout;
