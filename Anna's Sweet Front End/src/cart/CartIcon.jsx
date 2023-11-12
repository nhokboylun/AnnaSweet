import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { getCart } from "./cartSlice";

function CartIcon() {
  const cartQuantity = useSelector(getCart).length;
  return (
    <div className="fixed right-0 top-0 border border-black bg-rose-200 hover:bg-rose-300 hover:transition-all hover:duration-500">
      <Button to="/Cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="border-1 h-14 w-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Button>

      <div className="fixed right-8 top-2 rounded-full text-xl font-bold text-red-500">
        {cartQuantity}
      </div>
    </div>
  );
}

export default CartIcon;
