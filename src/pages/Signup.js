// add useContext
import React, { useContext } from 'react';
import { useGlobalContext } from '../context/context';
import {withRouter} from 'react-router-dom'




const Signup = (props) => {
    // const { handleSignup } = useContext(firebaseAuth)
    const { handleSignup, inputs, setInputs, errors } = useGlobalContext()

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('handleSubmit')
        // wait to sign up
        await handleSignup()
        //push home
        props.history.push('/')
    }
    const handleChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
    }
    
    //catching setErrors
    //  signup: (email, password, setErrors) => {
        
        
        return (
            <form onSubmit={handleSubmit}>
        {/* replace the div tags with a form tag */}
        Signup
        {/* make inputs  */}
            <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
            <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
            <button>Sign up</button>

            {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
        </form>
    );
};

// export default Signup;
export default withRouter(Signup);