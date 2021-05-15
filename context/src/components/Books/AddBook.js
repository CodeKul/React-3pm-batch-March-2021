import React, { useState } from 'react'

export default function AddBook() {

    const [bookName, setBookName] = useState();
    const [price, setPrice] = useState();
    const [books, setBooks] = useContext(BookContext);

    const addBookName = (e) => {
        setBookName(e.target.value);
    }


    const addPrice = (e) => {
        setPrice(e.target.value);
    }


    const addBook = (e) => {
        e.preventDefault();
        setBooks((prevBooks)=> [
            ...prevBooks, 
            {bookName: bookName, 
            price:price}
        ]);
    }
    
    return (
        <div>
            
            <form action="">
                <input type="text"
                name="bookName"
                value={bookName}
                onChange={addBookName}
                 />

                <input type="text"
                name="price"
                value={price}
                onChange={addPrice}
                 />


                 <button
                 onClick={addBook}
                 >Add Book</button>

            </form>
        </div>
    )
}
