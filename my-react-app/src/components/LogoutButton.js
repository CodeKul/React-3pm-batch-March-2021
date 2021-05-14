import React from 'react'

export default function LogoutButton({logoutmsg}) {
    return (
        <div>
            <button onClick={logoutmsg}>Logout</button>
        </div>
    )
}
