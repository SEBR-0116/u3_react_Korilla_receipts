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


export default function BrittanyCOM(){
    if(receipts[1].paid==false)
    {
        return (
            <>
            <div className="Brittany">
            <p className="personName">Name:{receipts[1].person}</p>
            <p className="order">main:<span>{receipts[1].order.main}</span></p>
            <p className="order">protein:<span>{receipts[1].order.protein}</span></p>
            <p className="order">rice:<span>{receipts[1].order.rice}</span></p>
            <p className="order">sauce:<span>{receipts[1].order.sauce}</span></p>
            <p className="order">drink:<span>{receipts[1].order.drink}</span></p>
            <p className="order">cost:<span>{receipts[1].order.cost}</span></p>
            </div>
            </>
           )

    }

}