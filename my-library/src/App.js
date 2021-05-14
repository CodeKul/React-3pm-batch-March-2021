import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddBook from "./components/AddBook"
import BooksList from "./components/BooksList"
import EditBook from "./components/EditBook"
import NotFound from "./components/NotFound"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Switch>
        <Route path="/" exact  component={BooksList}></Route>
        <Route path="/addbook"  component={AddBook}></Route>
        <Route path="/editbook/:id"  component={EditBook}></Route>
        <Route  component={NotFound}></Route>
      </Switch>
      
      </BrowserRouter>
         </div>
  );
}

export default App;
