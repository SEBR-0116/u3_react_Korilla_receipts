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
        toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
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

  <div className="OriginalReceipt">
    {receipts.map((receipts) => (
      receipts.paid && (


        <div className="receiptItem" key={receipt.id} person={receipt.person} order={receipt.order}>

        <h2>{receipt.person}</h2>

      <ul>  
        <li>Main: {Main}</li>
        <li>Protein: {Protein}</li>
        <li>Rice: {Rice}</li>
        <li>Sauce: {Sauce}</li>
        <li>Topping: {Topping}</li>
        <li>Drink: {Drink}</li>
        <li>Cost: ${Cost}</li>
        <li>Paid: {receipt.paid ? 'Yes' : 'No'}</li>
        
      </ul>
      <div/>
  ))}

    </div>
}
  export default Receipt