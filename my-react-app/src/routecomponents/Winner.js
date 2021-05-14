import React from 'react'
import { useHistory } from 'react-router'

export default function Winner() {

    let history = useHistory();

    const handleClick = () => {
            history.goBack("/gamepage")
    };
    return (
        <div>
            You Won....!!! 

            <button onClick={handleClick} type="button">
                Play Again
            </button>
        </div>
    )
}
