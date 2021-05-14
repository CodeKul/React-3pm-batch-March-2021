import React, {useEffect, useState} from 'react'


export default function ComponentSix() {

    const [age, setAge] = useState(0)
    const handleClick = () => setAge(age+1)

        useEffect(() => {
            document.title = "You are" + age + "years old...!"
            console.log("Component rendered")
        })


    return (
        <div>
            {/* useState()
            useRef()
            usEffect()
            useContext()
            useReducer()
            useCallback() */}

<p>Check the tab of browser</p>

<button onClick={handleClick}>Update Title on Tab</button>

<p>{age}</p>



        </div>
    )
}
