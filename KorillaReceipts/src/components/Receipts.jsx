export default function Receipts({receipt}) {
    return (
        <div className={`receipts ${receipt.person}`}>
            <h2>{receipt.person}</h2>
            <ul>
                <li>Main: {receipt.order.main}</li>
                <li>Protein: {receipt.order.protein}</li>
                <li>Rice: {receipt.order.rice}</li>
                <li>Sauce: {receipt.order.sauce}</li>
                <li>Drink: {receipt.order.drink}</li>
                <li>Cost: {receipt.order.cost}</li>
            </ul>
        </div>
    )
}