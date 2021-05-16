import { useState } from "react";
import AddBook from "./components/Books/AddBook";
import BookProvider from "./components/Books/BookContext";
import BookList from "./components/Books/BookList";
import Navbar from "./components/Books/Navbar";
import "./styles.css";

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Counter from "./components/USEReducer/Counter";

export default function App() {
const [myName, setMyName] = useState("SRK")

  return (
    <div className="App">

      {/* <ComponentA myName={myName}/>
      <ComponentB myName={myName}/> */}
      {/* <BookProvider>
        <Navbar/>
        <AddBook/>
        <BookList/>
      </BookProvider> */}

      <Counter/>
    </div>
  );
}
