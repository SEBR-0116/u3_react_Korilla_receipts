function Receipts(props) {
	console.log(props)

	const { receipts } = props

	return (
		// return a card component
		// followed ex. on legacy reacts docs page for map function"https://legacy.reactjs.org/docs/lists-and-keys.html"
		<div>
			{receipts.map((receipt) => (
				<div className="order-container" key={receipt.id}>
					<h3>{receipt.person}'s Order</h3>
					<p>Main: {receipt.order.main}</p>
					<p>Protein: {receipt.order.protein}</p>
					<p>Rice:{receipt.order.rice} </p>
					<p>Sauce: {receipt.order.sauce}</p>
					<p>Drink: {receipt.order.drink}</p>
					<p>Cost: ${receipt.order.cost}</p>
				</div>
			))}
		</div>
	)
}
export default Receipts
