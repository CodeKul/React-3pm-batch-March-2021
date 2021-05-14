import React, {useState} from 'react'
import './main.css'

export default function Form() {

// const [state, setstate] = useState(initialState)

//  const [user, setUser] = useState (
//      {
//          firstName: "",
//          lastName:"",
//          email:"",
//      }
//  );

const [firstName, setFirstName] = useState("");

const [lastName, setLastName] = useState("");
 
//  const getFirstName = (e) => {
//      setUser({ ...user, [e.target.name]: e.target.value});
//     };

const getFirstName =(e) => {
    setFirstName(e.target.value)
}

const getLastName =(e) => {
    setFirstName(e.target.value)
}


    



//  const getUser = () => {
//      console.log(user);
//  }

    return (
        <div>
            
            <form>
                <label>First Name</label>
                <input 
                
                type="text"
                className="form-control"
                name="firstname"
                value={firstName}
                onChange={getFirstName}/>

                <p>{firstName}</p>


                <label>Last Name</label>
                <input 
                type="text"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={getLastName}/>

                <p>{lastName}</p>
            </form>
        </div>
    )
}
