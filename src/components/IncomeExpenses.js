import React from 'react'
import { useGlobalContext } from '../context/context'

const IncomeExpenses = () => {
    const { transactions } = useGlobalContext();
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    const expenses = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2)

    return (
        <section className='inc-exp-container'>
            <div>
                <h4>income</h4>
                <div className='money plus'>&#36;{income}</div>
            </div>
            <div>
                <h4>expenses</h4>
                <div className='money minus'>&#36;{expenses}</div>
            </div>
        </section>
    )
}

export default IncomeExpenses