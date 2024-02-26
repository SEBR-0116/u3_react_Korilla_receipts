import Person from "./Person"
import Order from "./Order"

function Receipt (props) {
    console.log(props)

    return (
        <div className= "receipt">
            <h1>Recieipt</h1>
            <Person person={props.receiptData.person}/>
            <Order order={props.receiptData.order}/>
        </div>
    )
}

export default Receipt