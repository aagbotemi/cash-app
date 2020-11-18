import React from 'react'
import Balance from './Balance'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

const Header = () => {
    const {openSidebar} = useGlobalContext()

    return (
        <section className='banner'>
            <header>
                <button className="sidebar-toggle" onClick={openSidebar}>
                    <FaBars />
                </button>
                <div className='hero'>
                    Cash<span>Cash</span>
                </div>
            </header>
            <Balance />
        </section>
    )
}

export default Header