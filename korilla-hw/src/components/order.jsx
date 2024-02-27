import Main from "./main";
import Protein from "./proterin";
import Rice from "./rice";
import Drink from "./drink";
import Cost from "./cost";
import Sauce from "./sauce";

export default function Order(props) {
    return (
        <div className={order}>
      <div>
        <Main main ="Burrito"/>
        <Protein protein="Organic Tofu"/>
        <Rice rice="Purple Rice"/>
        <Sauce sauce="Green Crack "/>
        <Drink drink="Korchata"/>
        <Cost cost="22"/>
      </div>
      <div>
        <Main main ="Rice Bowl"/>
        <Protein protein="Ginger Soy Chix"/>
        <Rice rice="Sticky Rice"/>
        <Sauce sauce="Korilla "/>
        <Drink drink="korochata"/>
        <Cost cost="19"/>
      </div>
      <div>
        <Main main ="Salad Bowl"/>
        <Protein protein="Organic Tofu"/>
        <Rice rice="None"/>
        <Sauce sauce="K'lla "/>
        <Drink drink="Sparkling Blood Orange Soda"/>
        <Cost cost="20"/>

      </div>
      </div>
    );
  }