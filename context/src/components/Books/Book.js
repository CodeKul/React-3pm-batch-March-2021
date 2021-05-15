import React from 'react'

export default function Book({bookName, price, id}) {
    return (
        <div>
            <ul>
                <li key={id}>{bookName}</li>
                <li>{price}</li>
            </ul>
        </div>
    )
}
