const Receipts = (props) => {


    return(
        <div className="receipts" >
             {props.receipts.map((receipt) =>
                 <div className="container" key={receipt.person}>
                    <div className="card">
                    <h1>{receipt.person}</h1>
                    <h3>Main: {receipt.order.main}</h3>
                    <h3>Protein: {receipt.order.protein}</h3>
                    <h3>Rice: {receipt.order.rice} </h3>
                    <h3>Sauce: {receipt.order.sauce}</h3>
                    <h3>Drink: {receipt.order.drink}</h3>
                    <h3>Cost: ${receipt.order.cost}</h3>
                    <h3> {receipt.paid} </h3>
                    </div>
                 </div> 
    )}
        
             </div>
    )

}


 export default Receipts

  