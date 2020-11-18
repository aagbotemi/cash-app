import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MyDetails = () => {
    return (
        <div>
            <Link to="/"><FaArrowLeft /></Link>
            
            <div>
                Welcome: username
            </div>
            <div>
                Name: username
            </div>
            <div>
                Email: {}
            </div>
            <div>
                Password: {}
            </div>
        </div>
    )
}

export default MyDetails
