
import ReceiptList from './components/RecieptList';
import receipts from './components/reciept1';
import './components/App.css'
function App() {

  const unpaidReceipts = receipts.filter(receipt => !receipt.paid);

  return (
    <div className = "app-container">
      <h1 className="title">Korilla</h1>
      <ReceiptList receipts={unpaidReceipts} />
    </div>
  );
}

export default App;

