import React from 'react'

export default function LoginComponent() {

    const dispatch = useDispatch();
    const loginstatus = useSelector(state => state.authentication)
    return (
        <div>
            <button 
            onClick={() => dispatch({type: "login"})}>
                
                {loginstatus.isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    )
}
