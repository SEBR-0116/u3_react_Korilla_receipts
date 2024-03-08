import Toppings from './Toppings'


export default function Receipt(props) {
  // console.log(`main props is`, props.receipts)
  
  return ( 
    <div className='container'>
      {props.receipts.map((receipt) => {
        return !receipt.paid ? (
          <div className='receipt' key={receipt.id}>
          <h2 className='person'>{receipt.person}</h2>
          <ul>
            <li><span className='highlight'>Main: </span>{receipt.order.main}</li>
            <li><span className='highlight'>Protein: </span>{receipt.order.protein}</li>
            <li><span className='highlight'>Rice: </span>{receipt.order.rice}</li>
            <li><span className='highlight'>Toppings: </span><Toppings toppings={receipt.order.toppings } /></li>
            <li><span className='highlight'>Sauce: </span>{receipt.order.sauce}</li>
            <li><span className='highlight'>Drink: </span>{receipt.order.drink}</li>
            <li><span className='highlight'>Cost: </span>{receipt.order.cost}</li>
          </ul>
        </div>
        ) : null
      })}
    </div>
  )
}