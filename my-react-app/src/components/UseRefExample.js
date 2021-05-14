import React, {useEffect, useRef, useState} from 'react'

import './main.css'

export default function UseRefExample() {

    let [milliseconds, setMilliseconds] = useState(0) 

    const [ticking, setTicking] = useState(false)

    const interval = useRef()


    useEffect(() => {

        if (ticking) {
        interval.current = setInterval(() => {
            setMilliseconds((ms) => ms+1)
        }, 1);



        return () => clearInterval(interval.current);
    } else {
clearInterval(interval.current)
}
    }, [ticking]);



    return (
        <div>
{/* 
            <div>counter value:{count}</div>
            <button onClick={
                () => {
                console.log(count);
                count++;
            } }>Increment</button> */}
<h1>{(milliseconds)}</h1>

{milliseconds}



<button onClick={() => setTicking((c) => !c)}>
    {milliseconds === 0
    ? 'Start' : ticking ? 
'Pause' : 'Resume'}
</button>
        </div>
    )
}
