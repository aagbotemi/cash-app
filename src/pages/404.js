import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className="">
                <h1 className="text-2xl md:text-4xl m-auto">Page Not Found</h1>
                <Link to='/'  className="text-indigo-800 text-center font-bold">Back to login</Link>
            </div>
        </div>
    )
}

export default NotFound
