import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router"


import DashboardPage from "./pages/DashboardPage"
import PostsPage from "./pages/PostsPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact  component={DashboardPage} />
          <Route path="/posts" exact  component={PostsPage} />

          <Redirect to="/"/>

        </Switch>
      </Router>
         </div>
  );
}

export default App;
