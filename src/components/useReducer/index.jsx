import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid';

const bookData = [
    {id : uuidV4(), name : 'Sahih al-Bukhari'},
    {id : uuidV4(), name : 'Sahih Muslim'},
    {id : uuidV4(), name : 'Faza’il-e-Amaal'},
]

const UseReducer = () => {
  const [modalText, setModalText] = useState('');
  const [newBooks, setNewBooks] = useState('');
  const [book, setBooks] = useState(bookData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {id : uuidV4(), name : newBooks};
    setBooks((prevBooks) => {
        return [...prevBooks, newBook];
    });
  }

  return (
    <div className='card'>
        <h2 className='mb-3'>All Islamic Books</h2>
        <form className='d-flex mb-2' onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setNewBooks(e.target.value)} placeholder='Enter book name' className='form-control' />
            <button type='submit' className='btn btn-info'>Add</button>
        </form>
        

        <ol>
            {book.map((book) => {
                return <li className='mb-2' key={book.id}>{book.name}</li>
            })}
        </ol>
    </div>
    
  )
}

export default UseReducer;