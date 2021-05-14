import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

export default function AnimationSC() {

    // 1st we created the animation by using keyframes keyword
const leftToRight = keyframes`
from {
    left:0;
    background-color:red;
}

to {
    transform: translateX(400px);
    background-color:blue;
}
`;

const Component1 = styled.div`
display:inline-block;
width:400px;
height:400px;
animation-name: ${leftToRight}; //important
animation-duration: 5s;
`;

const Component2= styled.div.attrs(() => ({tabIndex:-1}))`

background-color:darkred;
color:white;
width:400px;
height:400px;

&:hover {
    background-color:yellow;
    color:red;
}

// component is represented by & symbol

.one &{
    background-color: blue;
}



`;
    return (
        <div>
            <Component1/>

            <Component2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum est id, veniam esse saepe eveniet ad, ipsum, libero nemo similique natus voluptatibus laborum praesentium quae! Atque ad repellendus officiis obcaecati.</Component2>
       <div className="one">

<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint eligendi aspernatur quidem inventore ab sit facere quisquam, ipsam temporibus veritatis iusto ut quas rem? Quibusdam illum porro unde eius!</div>

<Component2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ipsam incidunt illum ab ipsa et numquam quas sunt voluptatem quia. Reiciendis dolorum aspernatur suscipit voluptatum earum, tenetur itaque ex. Impedit.</Component2>
       </div>
        </div>
    )
}
