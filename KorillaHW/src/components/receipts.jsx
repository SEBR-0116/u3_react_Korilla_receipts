const Receipts = (props) => {
  console.log(props);
  return (
    <div className="receipts">
      <h2>Name: {props.name}</h2>
      <h3>Protein: {props.protein}</h3>
      <p>main: {props.main}</p>
      <p>sauce: {props.sauce}</p>
      <p>Drink: {props.drink}</p>
      <p>Cost: {props.cost}</p>
    </div>
  );
};
export default Receipts;
