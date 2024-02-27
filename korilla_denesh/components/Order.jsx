export default function Order (props){
    // const personName1 ='Jeremy'
    // const personName2 ='Brittany'
    // const personName3 ='Tom'
    // const personName4 ='Jessica'

    return(
        <div>
        <h2><span className="menu-list">Main : </span>{props.order.main}</h2>
        <h2><span className="menu-list">Protein : </span>{props.order.protein}</h2>
        <h2><span className="menu-list">Rice : </span>{props.order.rice}</h2>
        <h2><span className="menu-list">Sauce : </span>{props.order.sauce}</h2>
        <h2><span className="menu-list">Drink : </span>{props.order.drink}</h2>
        <h2><span className="menu-list">Cost : </span>{props.order.cost}</h2>
        <h2><span className="menu-list">Toppings : </span>{props.order.toppings}</h2>
        </div>
    )

}