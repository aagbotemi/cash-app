import React from 'react'
import { useGlobalContext } from '../context/context'

const Balance = () => {
    const { transactions } = useGlobalContext();
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts
        .filter(item => item)
        .reduce((acc, item) => (acc += item), 0)
    
    const sign = total < 0 ? '-' : null;
    return (
        <section className='balance'>
            <p>Balance</p>
            <h1>{sign}&#36;{Math.abs(total).toFixed(2)}</h1>
        </section>
    )
}

export default Balance