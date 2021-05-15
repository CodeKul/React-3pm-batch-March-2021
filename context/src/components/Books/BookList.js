import React, { useContext } from 'react'

export default function BookList() {

    const[books, setBooks] = useContext(BookContext);

    return (
        <div>
            
            {books && books.map((book,id) => (
                <div>
                    <Book bookName={book.bookName} price={book.price} key={book.id}/>
                </div>
            ))}
        </div>
    )
}
