import Person from './Person'
import Order from './Order'

export default function Receipts (props) {
  if (!props.isPaid) {
  return (
    <div className='receipt-container'>
      <div className='person'><Person personData={props.receiptData.person}/></div>
      <div className='order'><Order orderData={props.receiptData.order}/></div>
    </div>
  )
} 
}