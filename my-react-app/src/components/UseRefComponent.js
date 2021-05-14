import React, {useRef, useState} from 'react'

export default function UseRefComponent() {

   
        const [count, setCount] = useState(0);
        const counterEl = useRef(null)
        const inputEl = useRef(null)


        const increment = () => {
            setCount(count +1) 
            console.log(counterEl)
        }

        // function setWindowRef<T>(ref: React.RefObject<T>) {
        //     (window as any).ref = ref;
        // }

        // function getWindowRef<T>() {
        //    return (window as any).ref = ref;
        // }


    return (
        <div>

            Count: <span ref={counterEl}>{count}</span>

            <button onClick={increment}>Increment counter</button>


            <input ref={inputEl} type="text"/>
            
        </div>
    )
}
