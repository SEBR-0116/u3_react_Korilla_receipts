function Receipt(props) {
    console.log(props)

    const toppings = props.receiptData.order.toppings.join(', ')

    return(
        <div>
            <h1 className="name-text">{props.receiptData.person}</h1>
            <h2><span className="category-text">Main: </span> {props.receiptData.order.main}</h2>
            <h2><span className="category-text">Protein: </span>{props.receiptData.order.protein}</h2>
            <h2><span className="category-text">Rice: </span>{props.receiptData.order.rice}</h2>
            <h2><span className="category-text">Sauce: </span>{props.receiptData.order.sauce}</h2>
            <h2><span className="category-text">Drink: </span>{props.receiptData.order.drink}</h2>
            <h2><span className="category-text">Toppings: </span>{toppings}</h2>
            <h2><span className="category-text">Cost: </span>{props.receiptData.order.cost}</h2>
        </div>
    )
}

export default Receipt