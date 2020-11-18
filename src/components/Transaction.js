import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { useGlobalContext } from '../context/context'

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useGlobalContext();
    
    const {text, amount} = transaction
    const sign = amount < 0 ? '-' : '+';
    return (
        <article>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                <div className='details'>
                    <p>{text}</p>
                    <span>{sign}&#36;{Math.abs(amount).toFixed(2)}</span>
                </div>
                <div className='action'>
                    <small>{new Date().toDateString()}</small>
                    <button
                        onClick={() => deleteTransaction(transaction.id)}
                        className='delete-btn'>
                        <FaTrashAlt />
                    </button>
                </div>
            </li>
        </article>
    )
}

export default Transaction