import React from 'react'

const people = [
    {name: "Vaibhav", alive:true},
    {name: "Subodh", alive: true},
    {name: "Omkar", alive: true},
    {name: "Vaishnavi", alive: true},
    {name: "Siddhi", alive: true},
]

const reducer = (people, action) => {
    if(action.type == "chomp") {
        return people.map(person => {
            if(person.name == action.payload) {
                person.alive = false
            }

            return person;
        })
    }
}




export default function ReducerEx() {

    return (
        <div>
            {state.map((person, id) => (
                <div key={id} style={{display: "flex"}}>

                    <div>{person.name}</div>

                    {person.alive ? 
                    <div> ALIVE </div>}

                </div>
            ))}
        </div>
    )
}
