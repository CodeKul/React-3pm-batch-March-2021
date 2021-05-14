import React from 'react'

export default function Component5() {

var detail = {
    name: "Subodh",
    email: "subdh.codekul@gmail.com",
    designation: "javascripr developer",
    city: "Pune"
};
// ,

// {
//     name: "Sonali",
//     email: "sonali.codekul@gmail.com",
//     designation: "javascript developer",
//     city: "Pune"
// }



// localStorage.setItem('Key', 'Value';)



// localStorage.setItem('Detail', JSON.stringify(detail));

// localStorage.getItem('Detail');


sessionStorage.setItem('Detail', JSON.stringify(detail) );

sessionStorage.getItem('Detail');




const display = Object.keys(detail);

const data = JSON.parse(JSON.stringify(detail));

    return (
        <div>

            <div>
                {display.map((Detail,key) => (
                    <p key = {key}>{data.name}</p>
                ))}
            </div>
            
        </div>
    )
}
