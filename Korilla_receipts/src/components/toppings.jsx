
const toppings = (props) =>{

   const toppings = props.receiptsData.order.toppings
   const toppingsNew = toppings.join(', ')

 return (
   <h2> toppings:{toppingsNew}</h2>
   

 )

} 
export default toppings