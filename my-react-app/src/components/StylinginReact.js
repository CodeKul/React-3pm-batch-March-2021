import React, {Title} from 'react'
import styled from 'styled-components';


export default function StylinginReact() {
    const h1Style = {
        color: 'green',
        backgroundColor: 'yellow'
    }


    const Title = styled.h2`
    color: red;
    backgroundColor: gray;
    `;


    const header = styled.h2`
    color: red;
    `

    const Button =styled.button `
    background: ${props => props.primary ? "blue" : "green"};

        color: ${props => props.primary ? "white" : "red"};
        
        
        border-radius:8px;
        padding:10px`;


        const Msg =styled.p `
        
        color: white;
        background-color: darkred;
        
        `;


       
       

    return (
        <div>
            {/* Styling in React is done by multiple ways such as -

            1. Importing the CSS file in the component or App component
            2. Styled components - We can implement CSS in component itself using JS only.
            3. CSS modules -Whatever CSS we write it will be implemented for that component scope only.
            4. Inline CSS - In react styles are not specified as a string, instead they are specified 
            as a object. 
            5. CSS in JS  */}


<Title>
Styling in React different ways
</Title>

            <header>
                <h1 style={h1Style}>Styling in React</h1>
                
            </header>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <Button>Sign Up</Button>
            <Button primary>Login</Button>


            <Msg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam, rem dolore distinctio, quasi, vel nemo non aspernatur repudiandae exercitationem rerum porro enim? Ea eius aut maiores libero ratione recusandae?</Msg>


{/* <Wrapper>

</Wrapper> */}

            <main>
                <section 
                style={{backgroundColor:'blue',
                color:'white',
                fontStyle:'italic'}}>
                    <h2>News</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga reiciendis voluptates ipsum vero impedit atque accusantium nobis adipisci dolores optio dolorem, suscipit quo harum corrupti doloribus id autem in!</p>
                </section>
                <section>
                    <h2>Sports</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt id, modi corporis aperiam excepturi in rem? A explicabo natus magni illum, voluptatum sequi sunt, harum mollitia aperiam dolorem voluptatem.</p>
                </section>
                <section>
                    <h2>Politics</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore voluptate id reiciendis quos, facere eos nesciunt consequatur commodi est. Maiores vitae, tempora fugit consequuntur provident qui repudiandae. Itaque, quas.</p>
                </section>
                <section>
                    <h2>Entertainment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illum dolores adipisci nostrum? Asperiores molestiae commodi, fugit ratione blanditiis enim incidunt facere sunt saepe odio repudiandae qui, cumque nobis velit!</p>
                </section>
            </main>

        </div>
    )
}
