import Person from  "./person";
import Order from "./order"



export default function Receipt(props) {
    return (
        <div className="Receipt">
      <div>
         <Person guest="Karolin"/>
         <Order order="1"/>
      </div>
      <div>
         <Person guest="Mark"/>
         <Order order="2"/>
      </div>
      <div>
         <Person guest="Matt"/>
         <Order order="3"/>
      </div>
      </div>
    );
  }