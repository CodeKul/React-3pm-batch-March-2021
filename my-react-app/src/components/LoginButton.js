import React from 'react'

export default function LoginButton({loginmsg}) {
    return (
        <div>
            <button onClick={loginmsg}>Login</button>
        </div>
    )
}
