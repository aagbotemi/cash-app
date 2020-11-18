import React from 'react'

const Loading = () => {
    return (
        <div className="flex h-screen">
            <p className="m-auto">
                <i className="fas fa-circle-notch fa-spin text-5xl text-blue-800"></i>
            </p>
        </div>
    )
}

export default Loading;
