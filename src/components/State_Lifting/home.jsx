import React, { useState } from 'react';
import Todos from './todos';
import NewTodo from './new-todo';

const dummyData = ['Todo-1 ', 'Todo-2'];
function home() {

  const [data, setData] = useState(dummyData);

  const handleData = (newdata) => {
    setData([...data, newdata]);
  }

  return (
    <div className='card'>
      <div className='mb-3'>
        <NewTodo onhandleData={handleData} />
      </div>
      <Todos alldata={data} />
    </div>
  )
}

export default home