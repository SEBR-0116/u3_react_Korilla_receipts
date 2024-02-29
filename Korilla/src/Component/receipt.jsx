


const receipts = [
    {
        id: 1,
        person: 'Jeremy',
        order: {
            main: 'Burrito',
            protein: 'Skirt Steak',
            rice: 'Purple Rice',
            sauce: 'Green Crack',
            toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
            drink: 'Thai Iced Tea',
            cost: 22,
        },
        paid: true,
    },
    {
        id: 2,
        person: 'Brittany',
        order: {
            main: 'Rice Bowl',
            protein: 'Ginger Chicken',
            rice: 'Sticky Rice',
            sauce: 'Korilla',
            toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
            drink: 'Korchata',
            cost: 19,
        },
        paid: true,
    },
    {
        id: 3,
        person: 'Tom',
        order: {
            main: 'Salad Bowl',
            protein: 'Organic Tofu',
            rice: 'none',
            sauce: "K'lla",
            toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
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
            toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
            drink: 'Pineapple Jarritos',
            cost: 23,
        },
        paid: true,
    },
];
const Receipt = () => {
    return (
        <div>
            <h2> Korilla</h2>

            <div className="receiptparent">
                {receipts.map((receipt) => (
                    // Add a conditional check to render only if receipt.paid is true
                    receipt.paid && (
                        <div className="receiptItem" key={receipt.id}>
                            <h2>{receipt.person}</h2>
                            <ul>
                                <li>Main: {receipt.order.main}</li>
                                <li>Protein: {receipt.order.protein}</li>
                                <li>Rice: {receipt.order.rice}</li>
                                <li>Sauce: {receipt.order.sauce}</li>
                                <li>Toppings: {receipt.order.toppings.join(', ')}</li>
                                <li>Drink: {receipt.order.drink}</li>
                                <li>Cost: ${receipt.order.cost}</li>
                                <li>Paid: {receipt.paid ? 'Yes' : 'No'}</li>
                            </ul>
                        </div>
                    )
                ))}
            </div>
        </div >
    );
}

export default Receipt