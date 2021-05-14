import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router'
import apicalls from '../service/apicalls';

export default function EditBook() {

    const {id} = useParams();
    const history = useHistory();

    const[updatebook, setUpdateBook] = useState({

        bookName: "",
        authorName: "",
        rating: "",
    });


    const loadBook = async () => {
        let res = await apicalls.get(`/books/${id}`);

        console.log(res);
        setUpdateBook(res.data);
    };


    useEffect(() => {
        loadBook();
    }, []);

    const updateBook = () => {
        apicalls.put(`/books/${id}`, updatebook);
        history.push("/");
    }


    const handleInputChange = (e) => {
        setUpdateBook({...updatebook, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <div className="container">
                <form action="">

                    <div className="mb-3">

                        <label htmlFor="" className="form-label">Book Name</label>
                    
                    <input type="text"
                    className="form-control"
                    name="bookName"
                    value={updatebook.bookName}
                    placeholder="Enter the Book Name"
                    onChange={handleInputChange} />
                    </div>
                </form>
            </div>
        </div>
    )
}
