import React from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import BlogComponent from './BlogComponent';

export default function Blog() {

    const {blogid} = useParams();

    const {path, url} = useRouteMatch();

    return (
        <div>
            <h2>Blog {blogid}</h2>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus ipsa impedit in aspernatur suscipit, voluptatibus quo quam! Aliquid facilis cupiditate quas voluptatibus tempora totam reiciendis iusto quidem nemo quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ex placeat. Veniam esse doloremque consequuntur quaerat corrupti, magnam, non rem porro fugiat sequi, natus ex eius quam a fuga ab?

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ab, delectus, praesentium quas itaque inventore iusto architecto corrupti tenetur dolor earum eius tempora atque et accusamus, esse ea iure voluptatum.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corporis quaerat, adipisci facere dolore pariatur quia a inventore quod enim eos sit dolorum iusto dolorem doloremque? Totam ad cum libero.
            </p>

            <Link to ={`${url}/routing`}>Routing in React</Link> <br />

            <Link to={`${url}/hooks`}>Hooks in React Router</Link>

            <Link to={`${url}/props`}>State and Props in React Router</Link>
       
       
       <Switch>
           <Route path={`${path}/:blogname`} component={BlogComponent}></Route>
       </Switch>
       
        </div>
    )
}
