import './App.css';
function ReceiptItem({ receipt }) {
  const { person, order, paid } = receipt;

  return (
    <div className = "RecieptItem">
      <h3>{person}'s Receipt</h3>
      <p>Main: {order.main}</p>
      <p>Protein: {order.protien}</p>
      <p>Rice: {order.rice}</p>
      <p>Sauce: {order.sauce}</p>
      <p>Toppings: {order.toppings.join(', ')}</p>
      <p>Drink: {order.drink}</p>
      <p>Cost: ${order.cost}</p>
      <p>{paid ? 'Paid' : 'Not Paid'}</p>
    </div>
  );
}

export default ReceiptItem;

