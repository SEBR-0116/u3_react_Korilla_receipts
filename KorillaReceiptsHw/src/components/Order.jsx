

function Order (props) {
    const {cost, drink, main, protein, rice, sauce, toppings} = props.order


    return (
        
        <div className= "order">
            <p>Cost: {cost}</p>
            <p>Drink: {drink}</p>
            <p>Main: {main}</p>
            <p>Protien: {protein}</p>
            <p>Rice: {rice}</p>
            <p>Sauce: {sauce}</p>
            <p>Toppings: {toppings.join(' , ')}</p>

        </div>
    )
}

export default Order