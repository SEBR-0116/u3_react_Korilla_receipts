export default function Receipt(props) {
    return (
        <div className="container">
            {props.receipts.map((receipt, index) => (
                !receipt.paid ? (
                <div key={index} className="receipt">
                    <h1>{receipt.person}</h1>
                    <dl>
                        <dt>Main</dt>
                        <dd>{receipt.order.main}</dd>

                        <dt>Protein</dt>
                        <dd>{receipt.order.protein}</dd>

                        <dt>Rice</dt>
                        <dd>{receipt.order.rice}</dd>

                        <dt>Sauce</dt>
                        <dd>{receipt.order.sauce}</dd>

                        <dt>Toppings</dt>
                        {receipt.order.toppings.map((topping, i) => (
                            <div key={i}>
                                <dd>{topping}</dd>
                            </div>
                        ))}

                        <dt>Drink</dt>
                        <dd>{receipt.order.drink}</dd>

                        <dt>Cost</dt>
                        <dd>${receipt.order.cost}</dd>
                    </dl>
                </div>
            ): null))}
        </div>
    )
}