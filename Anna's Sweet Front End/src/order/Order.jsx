import { Form, redirect } from "react-router-dom";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCart } from "../cart/cartSlice";
import { useEffect, useRef, useState } from "react";
import { createOrder } from "../api/fetchApi";
import store from "../store";

function Order() {
  const cart = useSelector(getCart);
  const totalCart = useSelector(getTotalCart);

  const [deliveryFee, setDeliveryFee] = useState(3);
  const [isChecked, setIsChecked] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addressInputRef = useRef(null);

  useEffect(() => {
    if (addressInputRef.current) {
      new window.google.maps.places.Autocomplete(addressInputRef.current);
    }
  }, []);

  const handleCheckboxChange = (e) => {
    const currentCheckedStatus = e.target.checked;
    setIsChecked(currentCheckedStatus);
    currentCheckedStatus ? setDeliveryFee(0) : setDeliveryFee(3);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    if ((/^\d+$/.test(value) && value.length <= 10) || value === "") {
      setIsValid(true);
      setPhoneNumber(value);
    } else {
      setIsValid(false);
    }
  };

  const total =
    Number(totalCart.toFixed(2)) +
    Number(deliveryFee.toFixed(2)) +
    Number(((totalCart * 6) / 100).toFixed(2));

  if (cart.length === 0) {
    return (
      <div className="flexbox flex justify-center">
        <Button to="/Home" type="callToAction" className="my-24 w-1/2 md:w-1/3">
          Cart is empty, add more items to the cart before checkout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-6 text-center md:px-[200px] lg:px-[300px]">
      <h1 className="mb-8 text-3xl font-bold text-blue-500">
        Ready to place order? Please fill out this form
      </h1>
      <Form method="POST" className="flex w-[90%] flex-col gap-8">
        <div>
          <div className="flex flex-col gap-5 text-2xl">
            <div className="flex flex-col items-start">
              <label htmlFor="name" className="mb-1 font-semibold">
                First Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl pl-4"
              />
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="phone" className="mb-1 font-semibold">
                Phone Number:
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full rounded-xl pl-4"
              />
              {!isValid && (
                <p className="text-sm text-red-500">
                  Numbers only & can't exceed 10 numbers
                </p>
              )}
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="address" className="mb-1 font-semibold">
                Address:
              </label>
              <input
                ref={addressInputRef}
                id="address"
                name="address"
                type="text"
                required
                className="w-full rounded-xl pl-4"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start bg-gray-200 text-2xl">
          <p>Cart Price: ${totalCart.toFixed(2)}</p>
          <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
          <p>Tax (6%): ${((totalCart * 6) / 100).toFixed(2)}</p>
          <p>Total: ${total}</p>
        </div>

        <div className="flex gap-2 pt-0 text-xl">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            name="storePickup"
            value="true"
          />
          <label htmlFor="storePickup">Store pickup for $0 delivery fee</label>
        </div>

        <input type="hidden" name="subTotal" value={total}></input>

        <div>
          <Button type="callToAction">Place Order</Button>
        </div>
      </Form>
    </div>
  );
}

export default Order;

export async function orderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const stateData = store.getState();
  const mergeData = {
    username: stateData.user.username,
    cart: stateData.cart.cart,
    cartTotal: String(stateData.cart.total),
    ...data,
  };
  const res = await createOrder(mergeData);
  if (res.message.includes("successfully")) {
    const idString = res.message.split(":")[1].trim();
    const id = Number(idString);
    store.dispatch(clearCart());
    return redirect(`/order/${id}`);
  }
  return null;
}
