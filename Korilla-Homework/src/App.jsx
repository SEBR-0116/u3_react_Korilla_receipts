import './App.css'
import Main from './components/Main'
import receipts from './components/receipts'

console.log(receipts)
let paidArr=[]
for (let i=0; i<receipts.length;i++){
  if (receipts[i].paid==true){
    paidArr.push(receipts[i])
    receipts.splice(i,1)
  }
}

function App() {

console.log(receipts)
  return (
<div>
  <h1>Korilla</h1>
  <Main></Main>
</div>
  )
}

export default App
