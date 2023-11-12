import { useLoaderData } from "react-router-dom";
import { checkOrder } from "../api/fetchApi";
import OrderCheckItem from "./OrderCheckItem";

function OrderCheck() {
  const order = useLoaderData();
  const { id, subTotal, phone, name, cartTotal, address, cart } = order;

  const tax = ((cartTotal * 6) / 100).toFixed(2);
  const deliveryFee = subTotal - tax - cartTotal === 3 ? 3.0 : 0.0;
  const storePickup = deliveryFee === 3 ? false : true;
  return (
    <div className="mx-auto min-h-screen bg-slate-100 px-2 py-8 md:px-[300px]">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-semibold">Order #{id}, status</h1>
        {storePickup && (
          <p className="mt-4 rounded-full bg-red-400 px-2 py-2 font-semibold uppercase text-white sm:w-[150px]">
            In store pick up
          </p>
        )}
      </div>

      <div className="my-4 rounded-md bg-white p-4 shadow-md">
        <h2 className="mb-3 text-2xl font-semibold">Customer Details</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>

      <ul className="my-6">
        {cart.map((item, index) => (
          <li
            className={`flex items-center justify-between py-3 text-xl ${
              index !== cart.length - 1 ? "border-b" : ""
            } border-gray-300`}
          >
            <OrderCheckItem item={item} />
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start bg-gray-200 text-2xl">
        <p>Cart Price: ${cartTotal}.00</p>
        <p>Delivery Fee: ${deliveryFee}.00</p>
        <p>Tax (6%): ${tax}</p>
        <p>Total: ${subTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default OrderCheck;

export async function loader({ params }) {
  const order = await checkOrder(params.orderId);
  // console.log(order);
  return order;
}
