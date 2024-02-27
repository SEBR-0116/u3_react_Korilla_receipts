export default function Order (props) {
  
  return (
    <div className='receipt-details'>
      <h3>Meal: {props.orderData.main}</h3>
      <h3>Protein: {props.orderData.protein}</h3>
      <h3>Rice: {props.orderData.rice}</h3>
      <h3>Sauce: {props.orderData.sauce}</h3>
      <h3>Drink: {props.orderData.drink}</h3>
      <h3>Total: {props.orderData.cost}</h3>
    </div>
  )
}