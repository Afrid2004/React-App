import React from 'react';
import Todo from './todo';

function Todos(props) {
  return (
    <div>
      {props.alldata.map((data, index) =>
        <Todo key={index} data={data} />
      )}
    </div>
  )
}

export default Todos;