export default function Person (props) {

  return (
    <div className='person-name'>
      <h2>{props.personData}</h2>
      <h2>{props.personData1}</h2>
      <h2>{props.personData2}</h2>
      <h2>{props.personData3}</h2>
      
    </div>
  )
}