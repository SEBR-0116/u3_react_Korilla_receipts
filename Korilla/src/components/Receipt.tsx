import styles from '../App.module.css'

interface OrderInterface {
    main: string,
    protein: string,
    rice: string,
    sauce: string,
    toppings: Array<string>,
    drink: string,
    cost: number
}

interface ReceiptInterface {
    id: number,
    person: string,
    order: OrderInterface,
    paid: boolean
}

type Props = {
    receipt: ReceiptInterface;
}

export default function Receipt ({receipt}: Props) {
    return (
        <div className={styles.card}>
            <p>Order #: {receipt.id}</p>
            <p>Customer Name: {receipt.person}</p>
            <h3>Order Details:</h3>
            <ul>
                {
                    Object.entries(receipt.order).map(([key, value]) => {
                        return (
                            <li key={key}>{key}: {Array.isArray(value) ? (
                                <ul>
                                    {value.map((topping, index) => {
                                        return <li key={index}>{topping}</li>
                                    })}
                                </ul>
                            ) : (
                                value 
                            )}</li>
                        )
                    })
                }
            </ul>
            <h3>Total: {receipt.order.cost}</h3>

        </div>
    )
}