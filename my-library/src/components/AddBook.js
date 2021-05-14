import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import apicalls from "../service/apicalls"

export default function AddBook() {

    let history = useHistory();

    const [newBook, setNewBook] = useState({
        bookName: "",
        authorName: "",
        rating: "",
    });

    const saveBook = (e) => {
        e.preventDefault();
        apicalls.post("/books", newBook);
        history.push("/")
    };

    const handleInputChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value});
    };


    return (
        <div>
            <div className="container">
                <h1 className="text-center">Add a new Book</h1>


                <form action="">
                    <div className="mb-3">
                        <label htmlFor="">Book Name</label>

                        <input 
                        type="text"
                        className="form-control"
                        name="bookName"
                        value = {newBook.bookName} 
                        placeholder="Enter Book Name"
                        
                        onChange={handleInputChange}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Author Name</label>

                        <input 
                        type="text"
                        className="form-control"
                        name="authorName"
                        value = {newBook.authorName} 
                        placeholder="Enter Author Name"
                        onChange={handleInputChange}/>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="">Rating</label>

                        <input 
                        type="text"
                        className="form-control"
                        name="rating"
                        value = {newBook.rating} 
                        placeholder="Enter rating (0 out of 5)"
                        onChange={handleInputChange}/>
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-dark"
                        onClick={saveBook}>
                            Save Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
