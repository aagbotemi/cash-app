import React from 'react';
import { useGlobalContext } from '../context/context';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar, handleSignout} = useGlobalContext()

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' }`}>
            <div className="sidebar-header">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/details">My Details</Link></li>
                    <li><button onClick={handleSignout}>Logout </button></li>
                </ul>
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;