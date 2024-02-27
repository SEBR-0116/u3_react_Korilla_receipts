import Receipt from "./Receipt";

export default function Main() {
    let item = 0;
    return (
      <div className="mainContainer">
        <h2>Pending Receipt</h2>
        <div>
          <Receipt item={0}/>
          <Receipt item={1}/>
          <Receipt item={2}/>
          <Receipt item={3}/>
         
        </div>
      </div>
      );
    }