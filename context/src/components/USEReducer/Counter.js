import React, { useReducer } from 'react'

function CounterReducer(state, action) {
    console.log(state)

    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default: 
            return state;
    }
   
}

export default function Counter () {
    const [state, dispatch] = useReducer(CounterReducer, 0);

    return(
        <div>
            <h4>{state}</h4>
            <button onClick={() => dispatch("increment")}>Increment +</button>
            <button onClick={() => dispatch("decrement")}>Decrement +</button>
        </div>
    )
}
