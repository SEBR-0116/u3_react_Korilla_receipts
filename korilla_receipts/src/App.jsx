import './App.css'
import receipts from './receipts'

import Receipt from './components/Receipt'

console.log(receipts)
function App() {
  return (
    <div>
      <h1>Korilla</h1>
      <Receipt receipts={receipts} />
    </div>
  )
}

export default App
