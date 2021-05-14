import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'


const Calender = ({children, ...props}) => children(props);

const bg = ({background = "blue"}) => `background: ${background}`;

// children: ({Wrapper, Column, Box, Item, headers}) => (...)


const Link = styled.a.attrs((props) => ({
    href: props.$to,
}))`

color: white;
background-color: blue;
padding:8px;
`


const Button = styled.button `

font-size: 16px;
padding:8px;
background-color: ${props => props.theme.main};
color: ${props => props.theme.text};


`


Button.defaultProps = {
    theme: {
        main: "green",
        text: "red"
    }
}

const theme= {
    main: "blue",
    text: "white",
    background: "red"
};


const invertedTheme = ({text, background}) => ({
    text: background,
    background: text,
});










Calender.defaultProps = {

    Wrapper:styled.div`
    display: flex'
    flex-direction: row;`,

    Column:styled.div`
    display:flex;
    flex-direction: column;
    margin:0.5rem;
    border: 1px solid blue;
    width:400px`,


    Box:styled.div`
    display: flex;
    flex-direction: row;
   `,

    Item:styled.div`
    width: 100%`,



    headers: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    children: ({Wrapper, Column, Box, Item, headers}) => 

    <Wrapper>
        {headers.map((header, index) =>(
            <Column>
            {header}

<Box>
    <Item>1. Learn Javascript</Item>
    <Item>2. React Intro</Item>
    <Item>3. React project Structure</Item>
</Box>

<Box>
<Item>1. Learn Nodejs</Item>
    <Item>2. Nodejs Intro</Item>
    <Item>3. Nodejs project Structure</Item>
</Box>

            </Column>
        ))}


<Link $to="https://www.codekul.com">Visit To CODEKUL...</Link>



<ThemeProvider theme={theme}>
<Button>Click on Button</Button>

</ThemeProvider>

<ThemeProvider theme={theme}>

</ThemeProvider>


    </Wrapper> 

    




}




export default Calender;