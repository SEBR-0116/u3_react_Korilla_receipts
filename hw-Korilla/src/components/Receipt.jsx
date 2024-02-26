const Receipt = (props) => {
    // Learned this technique from https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/
    
    const receipts = [
        {
          id: 1,
          person: 'Jeremy',
          order: {
            main: 'Burrito',
            protein: 'Skirt Steak',
            rice: 'Purple Rice',
            sauce: 'Green Crack',
            toppings: ['Baby Bok Choy, ', 'Cucumber Kimchi'],
            drink: 'Thai Iced Tea',
            cost: 22,
          },
          paid: false,
        },
        {
          id: 2,
          person: 'Brittany',
          order: {
            main: 'Rice Bowl',
            protein: 'Ginger Chicken',
            rice: 'Sticky Rice',
            sauce: 'Korilla',
            toppings: ['Yuzu Pickled Sweet Pepper, ', 'Kale'],
            drink: 'Korchata',
            cost: 19,
          },
          paid: false,
        },
        {
          id: 3,
          person: 'Tom',
          order: {
            main: 'Salad Bowl',
            protein: 'Organic Tofu',
            rice: 'none',
            sauce: "K'lla",
            toppings: ['Blue Potato Salad, ', 'Pico De Gallo, ', 'Red Kimchi'],
            drink: 'Sparkling Blood Orange Soda',
            cost: 20,
          },
          paid: false,
        },
        {
          id: 4,
          person: 'Jessica',
          order: {
            main: 'Burrito Bowl',
            protein: 'Carnitas',
            rice: 'yellow rice',
            sauce: "Jalapeno Honey",
            toppings: ['Grilled Corn, ', 'Pico De Gallo, ', 'Guacamole'],
            drink: 'Pineapple Jarritos',
            cost: 23,
          },
          paid: true,
        },
      ];

    const unpaidReceipts = receipts.filter(receipt =>
        receipt.paid === false
    )

    const arrayReceipts = unpaidReceipts.map(receipt =>
        <div className='receipt' key={receipt.id}>
            <div className='receiptText'>
                <h2>{receipt.person}</h2>
                <p><span>Main:</span> {receipt.order.main}</p>
                <p><span>Protein:</span> {receipt.order.protein}</p>
                <p><span>Rice:</span> {receipt.order.rice}</p>
                <p><span>Sauce:</span> {receipt.order.sauce}</p>
                <p><span>Toppings:</span> {receipt.order.toppings}</p>
                <p><span>Drink:</span> {receipt.order.drink}</p>
                <p><span>Cost:</span> {receipt.order.cost}</p>
            </div>
          
        </div>
    )
    
    return (
        <>
          <div className='receiptList'>{arrayReceipts}</div>
        </>
    )
}
export default Receipt