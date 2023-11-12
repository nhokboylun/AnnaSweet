import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import {
  addQuantityToCart,
  reduceQuantityToCart,
  removeItem,
} from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between py-3 text-lg md:text-xl">
      <div className="flex gap-1">
        <strong>{item.quantity}x</strong>
        <div>{item.name}</div>
      </div>
      <div className="flex items-center gap-1">
        <strong>${item.totalPrice}.00</strong>
        <div className="grid grid-cols-2 justify-center border">
          <button
            className="border-r bg-gray-100 px-1 hover:bg-gray-400"
            onClick={() => dispatch(reduceQuantityToCart(item.id))}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <button
            className="border-l bg-gray-100 px-1 hover:bg-gray-400"
            onClick={() => dispatch(addQuantityToCart(item.id))}
          >
            +
          </button>
        </div>
        <Button
          type="callToAction"
          className="ml-2 text-xs sm:ml-0"
          onClick={() => dispatch(removeItem(item.id))}
        >
          <strong className="text-red-600">X</strong> Delete
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
