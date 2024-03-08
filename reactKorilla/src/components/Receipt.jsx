import Person from './Person'
import Order from './Order'

const Receipt = (props) => {
    //console.log(props)
    
if(props.meal.paid === false) {
    return(
        <div className='receipt'>
            <Person person={props.meal.person}/>
            <Order order={props.meal.order}/>
        </div>
    )
} else {
    return(null)
}
    
}

export default Receipt