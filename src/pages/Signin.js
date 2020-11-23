import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Signin = (props) => {
    const { handleSignin, inputs, setInputs, errors, setErrors, isLoggedIn } = useGlobalContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleSignin()
        setErrors('')
    }
    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prev => ({ ...prev, [name]: value }))
    }
    
    if (isLoggedIn) return <Redirect to="/" />
    return (
        <article className="w-full h-screen px-10">
            <form onSubmit={handleSubmit}>
                <header className="pt-10 text-3xl">
                    <h1 className="w-full text-black font-bold  text-center">Login</h1>
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
                <button className="text-center w-full my-3 bg-blue-600 hover:bg-blue-700 p-1 focus:outline-none">Login</button>
                
            </form>
            <div>
                Do not have an account? <Link to="/signup" className="text-indigo-700 underline">Sign up here</Link>
            </div>
        </article>
    );
};

export default Signin;