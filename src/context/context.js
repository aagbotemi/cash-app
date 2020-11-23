import React, { useReducer, useEffect, useState, useContext } from 'react'
import  reducer from './reducer';
import { authMethods } from '../config/authMethods'

const initialState = {
    transactions:
        localStorage.getItem('transactions') == null
        ? []
        : JSON.parse(localStorage.getItem('transactions'))
};

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(null)

    useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);
    
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const handleSignup = () => {
        return authMethods.signup(inputs.email, inputs.password, setErrors, setToken)
    }
    const handleSignin = () => {
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
    }
    const handleSignout = () => {
        authMethods.signout(setErrors, setToken)
    }
    
    
    return (
        <AppContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            handleSignup,
            handleSignin,
            token,
            inputs,
            setInputs,
            errors,
            setErrors,
            handleSignout,
        }}>
            {children}
        </AppContext.Provider>
    )
}
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}