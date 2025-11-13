import React, { useState } from 'react';
import Todos from './todos';
import NewTodo from './new-todo';

const allData = ['Todo-1 ', 'Todo-2'];
function home() {

  const [data, setData] = useState(allData);

  const handleData = (newdata) => {
    setData([...data, newdata]);
  }

  return (
    <div>
      <div className='mb-3'>
        <NewTodo onhandleData={handleData} />
      </div>
      <Todos alldata={data} />
    </div>
  )
}

export default home