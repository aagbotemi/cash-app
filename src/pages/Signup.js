import React from 'react';
import { useGlobalContext } from '../context/context';
import {Link, withRouter} from 'react-router-dom'

const Signup = (props) => {
    const { handleSignup, inputs, setInputs, errors, setErrors } = useGlobalContext()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await handleSignup()
        props.history.push('/')
        setErrors('')
    }
    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }        
    
    return (
        <section className="w-full h-screen px-10">

            <form onSubmit={handleSubmit}>
                <header className="pt-10 text-3xl">
                    <h1 className="w-full text-black font-bold  text-center">Sign up</h1>
                </header>
                <div>
                    {<p style={{color: 'red'}}>{errors}</p>}
                </div>
                <div className="form-control">
                    <input
                        type='email'
                        onChange={handleChange}
                        name="email"
                        placeholder='you@example.com'
                        value={inputs.email}
                        className="text-black"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="password"
                        onChange={handleChange}
                        name="password"
                        placeholder='password'
                        value={inputs.password}
                        className="text-black"
                    />
                </div>
                <button className="text-center w-full my-3 bg-blue-600 hover:bg-blue-700 p-1 focus:outline-none">Sign up</button>
            </form>
            <div>
                Have an account already? <Link to="/signin" className="text-indigo-700 underline">Login here</Link>
            </div>
        </section>
    );
};
export default withRouter(Signup);