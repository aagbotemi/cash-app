import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const { addTransaction } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '' || amount === '') {
            alert('Please, Enter transaction!')
        } else {
            const newTransaction = {
                id: Math.floor(Math.random() * 10000000000),
                text,
                amount: +amount
            }
            addTransaction(newTransaction)
            setAmount('')
            setText('')
        }
    }
    
    return (
        <section className='add-trans'>
            <h4>Add New Transaction</h4>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        value={text}
                        placeholder='Enter a transaction'
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='text'>Amount
                    <small> (negative - expense, positive - income)</small>
                    
                    </label>
                    <input
                        type='number'
                        value={amount}
                        placeholder='Enter a transaction'
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button
                    className='submit-btn'
                    type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default AddTransaction;