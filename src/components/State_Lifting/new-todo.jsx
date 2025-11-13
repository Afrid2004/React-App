import React, { useState } from 'react'

function NewTodo(props) {

  const [newData, setNewData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newData);
    props.onhandleData(newData);
    setNewData('');
  }

  const handleChange = (event) => {
    setNewData(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="todo" id="todo" placeholder='Enter new todo' value={newData} required className='form-control mb-2' />
        <button type='submit' className='btn btn-info'>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodo;