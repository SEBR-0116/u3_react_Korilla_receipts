

const Receipt = ({ person, order }) => {
  const { main, protein, rice, sauce, drink, cost, toppings } = order;

  return (
    <div className="receipt">
      <h2>{person}'s Receipt</h2>
      <p><strong>Main:</strong> {main}</p>
      <p><strong>Protein:</strong> {protein}</p>
      <p><strong>Rice:</strong> {rice}</p>
      <p><strong>Sauce:</strong> {sauce}</p>
      <p><strong>Drink:</strong> {drink}</p>
      <p><strong>Cost:</strong> ${cost}</p>
      {toppings && (
        <div>
          <strong>Toppings:</strong>
          <ul>
            {toppings.map((topping, index) => (
              <li key={index}>{topping}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Receipt;
