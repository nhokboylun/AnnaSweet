function OrderCheckItem({ item }) {
  return (
    <>
      <div className="flex gap-1">
        <strong>{item.quantity}x</strong>
        <div>{item.menu.name}</div>
      </div>
      <div className="flex items-center gap-1">
        <strong>${item.menu.price}.00</strong>
      </div>
    </>
  );
}

export default OrderCheckItem;
