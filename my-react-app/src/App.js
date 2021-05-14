import React from 'react'
import StylinginReact from './components/StylinginReact'
import ReactStyling from './components/ReactStyling'
import UseRefComponent from "./components/UseRefComponent"
import Display from "./components/Display"
import AnimationSC from './components/AnimationSC'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LinkedinHome from './components/LinkedinHome'
import Navbar from './routecomponents/Navbar'
import Home from './routecomponents/Home'
import About from './routecomponents/About'
import Blog from './routecomponents/Blog'
import GamePage from './routecomponents/GamePage'
import Winner from './routecomponents/Winner'



export default function App() {
    return (
        <div>
            
    {/* <ComponentThree/>
    <LoginStatus/>

    <Display/> */}

    {/* <Form/> */}
    {/* <Component5/> */}

    {/* <Form/>

<ClassForm/> */}

{/* <ComponentSix/>

<UseRefComponent/> */}

{/* <UseRefExample/>

<UseRefLikeButton/> */}

{/* <UseEffectCleanUp/> */}
{/* <LoginButton/>
<LogoutButton/> */}


{/* <StylinginReact/> */}

{/* <AnimationSC/> */}

<LinkedinHome/>
<Router>

    <Navbar/>

{/* <main>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reactstyle">About</Link></li>
            <li><Link to="/useref">Blog</Link></li>
            <li><Link to="">Contact</Link></li>



        </ul>
    </nav> */}


<Switch>


    {/* <Route  path="/reactstyle" component={ReactStyling}/>
    <Route path="/useref" component={UseRefComponent} />
    <Route path="/render" render={() => <h1>Welcome to Codekul</h1>} /> */}

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route  path="/blog" component={Blog}/>
    <Route path="/useref" component={UseRefComponent} />
    <Route path="/render" render={() => <h1>Welcome to Codekul</h1>} />

    <Route path="/gamepage" component={GamePage}></Route>

    <Route path="/winner" component={Winner}></Route>

    </Switch>

{/* </main> */}


</Router>



{/* <ReactStyling/> */}
        </div>
    )
}
