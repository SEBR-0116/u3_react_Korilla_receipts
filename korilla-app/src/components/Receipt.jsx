export default function Receipt(props) {
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
            }, paid: false
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
                cost: 19
            }, paid: false,
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
            cost: 20
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
        }
    ];

    let personReceipt = receipts[props.item].person;
    let mainReceipt = receipts[props.item].order.main;
    let proteinReceipt = receipts[props.item].order.protein;
    let riceReceipt = receipts[props.item].order.rice;
    let sauceReceipt = receipts[props.item].order.sauce;
    let drinkReceipt = receipts[props.item].order.drink;
    let costReceipt = receipts[props.item].order.cost;


    if (receipts[props.item].paid !=true) {
    return (
        <div className="receiptContainer">
            <div className="person">{personReceipt}</div>
            <div className="order">
                <ul>
                    <li className="main"><strong>Main:</strong> {mainReceipt}</li>
                    <li className="protein"><strong>Protein:</strong> {proteinReceipt}</li>
                    <li className="rice"><strong>Rice:</strong> {riceReceipt}</li>
                    <li className="sauce"><strong>Sauce:</strong> {sauceReceipt}</li>
                    <li className="drink"><strong>Drink:</strong> {drinkReceipt}</li>
                    <li className="cost"><strong>Cost:</strong> {costReceipt}</li>
                </ul>
            </div>
        </div>
        
      );
    } else {
        console.log(`Item number ${[props.item]} has already been paid and not shown`)
    }
    }