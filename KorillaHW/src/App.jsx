import "./App.css";
import Receipts from "./components/receipts.jsx";
import Receipts2 from "./components/receipts2.jsx";
import Receipts3 from "./components/receipts3.jsx";

function App() {
  return (
    <>
      <Receipts
        name="Shaun"
        protein="Chicken"
        main="Burger"
        sauce="BBQ"
        drink="Soda"
        cost="14"
      />
      <Receipts2
        name="Tony"
        protein="Steak"
        main="Wagyu"
        sauce="Wasabi"
        drink="Wine"
        cost="57"
      />
      <Receipts3
        name="Angel"
        protein="Beans"
        main="Nacho"
        sauce="Queso"
        drink="Juice"
        cost="11"
      />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qaBRC7vHnLHnSG6XY3MbqFVooRpsFeSewg&usqp=CAU" />
    </>
  );
}

export default App;
