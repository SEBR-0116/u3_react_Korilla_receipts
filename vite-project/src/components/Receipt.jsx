const Receipt = (props) => {
    console.log(props)

      return (
        <>
        <ul>
          {props.receipts.map((receipt) => 
            
          receipt.paid === false ? <div className="receipt-container" key={receipt.person}>   
          <h1>{receipt.person}</h1> 
           <h2>Main: {receipt.order.main}</h2>
           <h2>Protein: { receipt.order.protein}</h2>
           <h2>Rice: {receipt.order.rice}</h2>
           <h2>Sauce: {receipt.order.sauce}</h2>
           <h2>Drink: {receipt.order.drink}</h2>
           <h2>Cost: ${receipt.order.cost}</h2>
         </div> : <div></div>
            
         
            
            )}
        </ul>
        </>
      )
}

export default Receipt