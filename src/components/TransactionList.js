import React from 'react'
import Transaction from './Transaction'
import { useGlobalContext } from '../context/context'

const TransactionList = () => {
    const { transactions } = useGlobalContext()

    return (
        <section className='transaction-list'>
            <h4>History</h4>
            <ul className='list'>
                {transactions.map((transaction) => {
                    return (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export default TransactionList;