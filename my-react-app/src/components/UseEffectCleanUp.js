import React, { useEffect, useState } from 'react'

export default function UseEffectCleanUp() {
    const [data, setData] = useState(0);

    const [enteredFilter, setEnteredFilter] = useState("");



    useEffect(() => {

        const fetchData = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/users/');
       let responseData = await response.json();
    
       let filteredData = responseData.filter(item => {
           return item.name.includes(enteredFilter);
       });
       setData(filteredData);
        };
    
        fetchData();
    }, [enteredFilter]);


    useEffect (() => {
        console.log("Second useEffect in same component")
    }, [])
    




    
    // useEffect(()=> {
    //     fetchData();
    // }, []);
    return (
        <div>
            <ul>
                {data.map(e => (
                    <li key={e.id}>

                        <h3>{e.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}
