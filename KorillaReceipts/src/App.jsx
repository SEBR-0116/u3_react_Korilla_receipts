import Receipts from './components/Receipts'
import receipts from './components/Data'
import './App.css'

function App() {
  const unpaidReceipts = receipts.filter(receipt => !receipt.paid)
  return (
    <div className="container">
      <h1>Korilla Receipts</h1>
      <div className="receiptContainer">
      {unpaidReceipts.map(receipt => 
      <Receipts id={receipt.id} receipt={receipt} />
      )}
      </div>
    </div>
  )
}

export default App
