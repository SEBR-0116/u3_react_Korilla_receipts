import Main from './Main'
import Protein from './Protein'
import Rice from './Rice'
import Sauce from './Sauce'
import Drink from './Drink'
import Cost from './Cost'

const Order = (props) => {
    //console.log(props)
    return(
        <div className='order'>
            <Main main={props.order.main}/>
            <Protein protein={props.order.protein}/>
            <Rice rice={props.order.rice}/>
            <Sauce sauce={props.order.sauce}/>
            <Drink drink={props.order.drink}/>
            <Cost cost={props.order.cost}/>
        </div> 
    )

}

export default Order