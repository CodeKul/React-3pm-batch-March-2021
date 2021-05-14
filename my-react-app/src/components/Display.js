import React from 'react'

export default function Display() {

    let tableData = [ 
        {
        person: "siddhi",
        designation: "Full Stack Enginer",
        city: "Pune",
    }, 

    {
        person: "Omkar",
        designation: "Javascript Developer",
        city: "Pune",
    }


]



    return (
        <div>

            <table>
                <tr>
                    <th>Person</th>
                    <th>Designation</th>
                    <th>City</th>
                </tr>

                {tableData.map((item, key) => 
                (
                    <tr key={key}>
                        <td>{item.person}</td>
                        <td>{item.designation}</td>
                        <td>{item.city}</td>
                    </tr>
                ) )}
            </table>
            
        </div>
    )
}





