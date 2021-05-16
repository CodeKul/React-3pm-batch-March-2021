import React from 'react'

export default function ComponentB({myName}) {
    return (
        <div>
            <h1>Component B</h1>
            <ComponentC value={myName}/>
        </div>
    )
}
