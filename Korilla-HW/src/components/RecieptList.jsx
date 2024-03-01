
import ReceiptItem from './RecieptItem';


function ReceiptList({ receipts}) {
  return (
    <div className = "reciept-list-container">
      {receipts.map(receipt => (
        <ReceiptItem key={receipt.id} receipt={receipt} />
      ))}
    </div>
  );
}

export default ReceiptList;
