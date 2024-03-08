export default function Toppings(props) {

  return (
    <>
      {props.toppings.map((topping, index) => (
          <span key={index}>{topping}{index < props.toppings.length-1 ?', ' : ''} </span>
      ))}
    </>
  )
}
