import React, { useReducer, useState } from 'react'
import {v4 as uuidV4} from 'uuid';

const bookData = [
    {id : uuidV4(), name : 'Sahih al-Bukhari'},
    {id : uuidV4(), name : 'Sahih Muslim'},
    {id : uuidV4(), name : 'Faza’il-e-Amaal'},
]

const Modal = ({text}) => {
  return <p>{text}</p>
}

const reducer = (state, action) => {
  const newbook = [...state.books, action.payload];
  if(action.type === "ADD"){
    return{
      ...state,
      books : newbook,
      modalBox : true,
      modalText : "Book is added successfully."
    }
  }
  if(action.type === "REMOVE"){
    const filterBooks = [...state.books].filter(book => book.id !== action.payload);
    return {
      ...state,
      books : filterBooks,
      modalBox: true,
      modalText : "Book is removed successfully."
    }
  }
  return state;
}

const UseReducer = () => {
  const [rdcbook, dispatch] = useReducer(reducer, {
    books : bookData,
    modalBox : false,
    modalText : ''
  })

  const [newBooks, setNewBooks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newBooks.trim()){
      return;
    }
    const newBook = {id : uuidV4(), name : newBooks};
    dispatch({type : "ADD", payload : newBook});
    setNewBooks('');
  }

  const handleRemove = (id) => {
    dispatch({type : "REMOVE", payload : id});
  }

  return (
    <div className='card'>
        <h2 className='mb-3'>All Islamic Books</h2>
        <form className='d-flex mb-4' onSubmit={handleSubmit}>
            <input type="text" value={newBooks} onChange={(e) => setNewBooks(e.target.value)} placeholder='Enter book name' className='form-control' />
            <button type='submit' className='btn btn-info flex-shrink-0'>Add Book</button>
        </form>
        {rdcbook.modalBox && <div className='mb-3'><Modal text={rdcbook.modalText} /></div>}

        <ol className='m-0'>
            {rdcbook.books.map((book) => {
                return <li className='mb-4' key={book.id}>
                  <div className='d-flex gap-2 align-items-center'>
                    <div className='flex-grow-1'>
                      <h4>{book.name}</h4>
                    </div>
                    <div>
                      <button className='btn btn-outline-danger py-1' onClick={() => handleRemove(book.id)}>Remove</button>
                    </div>
                  </div>
                </li>
            })}
        </ol>
    </div>
    
  )
}

export default UseReducer;