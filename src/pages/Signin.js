// add useContext
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Signin = (props) => {
    const { handleSignin, inputs, setInputs, errors, isLoggedIn } = useGlobalContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        await handleSignin()
        //props.history.push('/signin')
    }
    const handleChange = e => {
        const { name, value } = e.target
        console.log(inputs)
        setInputs(prev => ({ ...prev, [name]: value }))
    }
    
    if (isLoggedIn) return <Redirect to="/" />
    return (
        <form onSubmit={handleSubmit}>
            {/* replace the div tags with a form tag */}
        Login
            {/* make inputs  */}
            <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
            <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
            <button>Login</button>

            {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
        </form>
    );
};

export default Signin;



// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import firebase from '../config/firebase'

// export default function Login() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [form, setForm] = useState({ email: "", password: "" })
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     function handleForm(e) {
//         e.preventDefault();
        
//         if (isLoading) return;
//         setIsLoading(true);

//         firebase
//             .auth()
//             .signInWithEmailAndPassword(form.email, form.password)
//             .then((res) => {
//                 setIsLoggedIn(true)
//                 setError('')
//                 setIsLoading(false)
//             })
//             .catch((e) => {
//                 setError(e.message);
//                 setIsLoading(false);
//             });
//     }

//     function handleInput(e) {
//         setForm({...form, [e.target.name]:e.target.value})
//     }

//     if(isLoggedIn) return <Redirect to="/home" />
//     return (
//         <div className='flex w-screen h-screen bg-gray-800'>
//             <div className='m-auto sm:w-3/3 md:w-2/3 lg:w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-blue-900 to-blue-800'>
//                 <form className='m-6 w-12/12' onSubmit={handleForm}>
//                     {(error !== "") && <p>{error}</p>}
//                     <h1  className='w-full text-4xl text-center my-3'>Login</h1>
//                     <div className='w-full my-6'>
//                         <input type="email"
//                             className='p-2 rounded shadow w-full text-black'
//                             placeholder="you@example.com"
//                             name='email'
//                             value={form.email}
//                             onChange={handleInput}
//                         />
//                     </div>
//                     <div className='w-full my-6'>
//                         <input
//                             type="password"
//                             className='p-2 rounded shadow w-full text-black'
//                             placeholder="*********"
//                             name='password'
//                             value={form.password}
//                             onChange={handleInput}
//                         />
//                     </div>
                    
//                     <div className='w-full my-10'>
//                         <button
//                             type="submit"
//                             class="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-gray-400"
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
