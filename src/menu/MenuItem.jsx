import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import { addToCart, getCart, removeItem } from "../cart/cartSlice";
import { useState } from "react";

function MenuItem({ item }) {
  const [addQuantity, setAddQuantity] = useState(1);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const product = {
    ...item,
    quantity: addQuantity,
    totalPrice: addQuantity * item.price,
  };
  const hasProduct = cart.some((obj) => obj.id === item.id);

  const decreaseAble = addQuantity > 1;

  return (
    <>
      <li className="flex gap-4 py-2 md:my-3 md:rounded-md md:bg-white md:p-4 md:shadow-lg">
        <img src={item.url} alt={item.name} className="h-28 w-28" />
        <div className="flex flex-grow flex-col">
          <div className="flex flex-grow flex-col pt-0.5">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm capitalize italic text-stone-500">
              {item.ingredient}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-end">
            {item.status === "available" ? (
              hasProduct ? (
                <Button
                  type="callToAction"
                  className="text-xs"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <strong className="text-red-600">X</strong> Remove Item
                </Button>
              ) : (
                <>
                  <p className="text-md font-semibold">
                    ${product.totalPrice}.00
                  </p>
                  <div className="mx-3 grid grid-cols-3 justify-center border">
                    <button
                      className="border-r bg-gray-100 hover:bg-gray-400"
                      onClick={() => setAddQuantity(addQuantity - 1)}
                      disabled={!decreaseAble}
                    >
                      -
                    </button>
                    <div className="px-2">{addQuantity}</div>
                    <button
                      className="border-l bg-gray-100 hover:bg-gray-400"
                      onClick={() => setAddQuantity(addQuantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <Button
                    type="callToAction"
                    onClick={() => dispatch(addToCart(product))}
                    className="w-24 rounded-none text-xs"
                  >
                    Add to cart
                  </Button>
                </>
              )
            ) : (
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default MenuItem;
