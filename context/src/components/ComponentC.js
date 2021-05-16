import React from 'react'
import ComponentD from "./ComponentD"

export default function ComponentC({value}) {
    return (
        <div>
            <h1>Component C</h1>
            <ComponentD value={value}/>
        </div>
    )
}
