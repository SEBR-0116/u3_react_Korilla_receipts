
import Person from '../components/Person';
import Order from '../components/Order';

import './App.css'
import Receipt from '../components/Receipt';


function App() {
  
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

  return (
    <>
    <h1 className='title'>Korilla</h1>
    <div className='main'>
      
   { receipts.map((receipt, index) => (

    !receipt.paid ? (
      <div className="sub">
          {/* <h2>Unpaid Receipts</h2> */}
          <Receipt id={receipt.id} person={receipt.person} order={receipt.order} />
      </div> ) : ( null
        // <div className="sub">
        //   <h2>Paid Receipts</h2>
        //   <Receipt id={receipt.id} person={receipt.person} order={receipt.order} />
        //   </div>
      )
    ))}
    </div>
 
    {/* <div className="sub">
        <Receipt id={receipts[0].id} person={receipts[0].person} order={receipts[0].order} />
    </div>
    <div className="sub">
        <Receipt id={receipts[1].id} person={receipts[1].person} order={receipts[1].order} />
    </div>
    <div className="sub">
        <Receipt id={receipts[2].id} person={receipts[2].person} order={receipts[2].order} />
    </div>
    <div className="sub">
        <Receipt id={receipts[3].id} person={receipts[3].person} order={receipts[3].order} />
    </div> */}
   
       </>
  )
}

export default App
