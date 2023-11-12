import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import Button from "../ui/Button";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const totalCart = useSelector(getTotalCart);
  const dispatch = useDispatch();

  const isLogin = username !== "authFailure" && username !== "registerFailure";
  const isCartEmpty = cart.length === 0;

  return (
    <div className="bg-gray-100 px-4 py-6 sm:h-screen sm:overflow-y-scroll sm:py-3">
      {isCartEmpty && isLogin ? (
        <div className="flex h-2/3 flex-col items-center justify-center space-y-6 text-2xl font-bold">
          <h1>Your cart is empty</h1>
          <p>Click this button to add more item</p>
          <div className="text-center">
            <Button
              to="/Home"
              type="callToAction"
              className="mt-2 hover:bg-yellow-500 hover:underline"
            >
              &larr; Back to Home
            </Button>
          </div>
        </div>
      ) : (
        <>
          <Button
            to="/Home"
            className="text-md text-blue-500 hover:text-blue-600 hover:underline"
          >
            &larr; Back to Home
          </Button>

          <h1 className="mt-7 text-3xl font-semibold">Your cart, {username}</h1>

          <ul className="mt-3 flex flex-col divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>

          <div className="my-6 bg-gray-200 text-2xl">
            <strong>Price: ${totalCart.toFixed(2)}</strong>
          </div>

          <div className="mt-6 space-x-2">
            <Button type="callToAction" to="/order/new">
              Check Out
            </Button>
            <Button type="clearCart" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
