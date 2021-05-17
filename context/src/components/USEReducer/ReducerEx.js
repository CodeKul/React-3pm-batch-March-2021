import React, { useContext, useReducer } from 'react'




const people = [
    {name: "Alice", alive:true},
    {name: "Harry", alive: true},
    {name: "Robin", alive: true},
    {name: "Julie", alive: true},
    {name: "Carolina", alive: true},
]

const deadsoul = () => ([
    {name: "Jay", alive:true},
    {name: "Rocky", alive: true},
    {name: "Pamela", alive: true},
    {name: "Mia", alive: true},
    {name: "Sarah", alive: true},
])

const reducer = (people, action) => {
    if(action.type == "chomp") {
        return people.map(person => {
            if(person.name == action.payload) {
                person.alive = false
            }

            return person;
        })
    }

    if(action.type == "revive") {
        return people.map(person => {
            if(person.name == action.payload) {
                person.alive = true;
            }

            return person;
        })
    }
    
}


function devour(name) {
    dispatch({type: "chomp", payload: name});
}

function showout(name){
    dispatch({type:"revive", payload: name})
}




export default function ReducerEx() {

    const [state, dispatch] = useReducer(reducer, people, deadsoul);

//const [state, dispatch] = useContext(StoreContext);

    return (
        <div>
            {state.map((person, id) => (
                <div key={id} style={{display: "flex"}}>

                    <div>{person.name}</div>

                    {person.alive ? 
                    <div> ALIVE </div>:
                    <div>Dead</div>}

                </div>
            ))}
        </div>
    )
}
