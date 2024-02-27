export default function Order (props){
    return (
        <div className="order">
            <h1>{props.name}</h1>
            <h4><span>Main:</span> {props.main}</h4>
            <h4><span>Protein:</span> {props.protein}</h4>
            <h4><span>Rice: </span>{props.rice}</h4>
            <h4><span>Sauce: </span>{props.sauce}</h4>
            <h4><span>Drink: </span>{props.drink}</h4>
            <h4><span>Cost: </span>${props.cost}</h4>
        </div>
    )
}
