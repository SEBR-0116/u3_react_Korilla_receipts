import Person from "./Person"
import Order from "./Order"

export default function Receipt (props){
  
    return(
        <div >
            {/* <h4>Recepi No. {props.id}</h4> */}
            <h2><Person person={props.person}/></h2>
            <h3><Order order={props.order} /></h3>
        </div>
    )

}