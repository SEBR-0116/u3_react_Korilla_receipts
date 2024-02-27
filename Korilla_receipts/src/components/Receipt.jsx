

const Receipt = (props) => {
  const toppings = props.receiptsData.order.toppings
  const toppingsNew = toppings.join(', ')

return (
  <>



    <div className="Container"> 
    <h1> {props.receiptsData.person} </h1>
    <h2> Main:<p>{props.receiptsData.order.main}</p></h2>
    <h2> Protein:<p>{props.receiptsData.order.protein}</p></h2>
    <h2>Rice:<p>{props.receiptsData.order.rice}</p></h2>
    <h2>Toppings:<p>{toppingsNew}</p></h2>
    <h2>Sauce: <p>{props.receiptsData.order.sauce}</p></h2>
    <h2>Drink:<p>{props.receiptsData.order.drink}</p></h2>
    <h2>Cost: <p>$ {props.receiptsData.order.cost}</p></h2>
    </div>
   

  </>
)
   
}
export default Receipt