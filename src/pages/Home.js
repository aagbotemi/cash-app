import React from 'react';
import Header from '../components/Header';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';


const Home = () => {



    return (
        <main>
            <Header />
            <section className="container">
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </section>
        </main>
    );
};

export default Home;