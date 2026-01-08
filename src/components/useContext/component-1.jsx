import React, { useState } from 'react';
import { Context } from './useContext';
import Component2 from './component-2';

const UseContext = () => {
  const [user, setUser] = useState({
    name : "Md Faisal Yousuf Afrid",
    id : 585433
  })
  return (
    // to pass multiple value use value={{user, user2}}
    <Context.Provider value={user}> 
      <Component2 />
    </Context.Provider>
  )
}

export default UseContext;