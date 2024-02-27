import Order from "./Order";
import receipts from "./receipts";

export default function Main() {
  return (
    <div className="orders-container">
      {receipts.map((receipt) => (
        <Order
         key={receipt.id}
         name={receipt.person}
         main={receipt.order.main}
         protein={receipt.order.protein}
         rice={receipt.order.rice}
         sauce={receipt.order.sauce}
         cost={receipt.order.cost}
         drink={receipt.order.drink} />
      ))}
    </div>
  );
}
