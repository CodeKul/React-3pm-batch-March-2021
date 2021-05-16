import React, { createContext, useState } from 'react'

export const BookContext = createContext();
console.log(BookContext);

export default function BookProvider(props) {
    const [books, setBooks] = useState([
        {
            bookName: "Book1",
            price: "200"
        },
        {
            bookName: "Book2",
            price: "400"
        }

    ]);


    return(
        <BookContext.Provider value= {[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}