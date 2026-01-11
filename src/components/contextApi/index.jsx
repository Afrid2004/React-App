import React, { useState } from 'react';
import Users from './users';
import { Context } from '../../context/context';
import NewUser from './newUser';
import { v4 as uuidV4 } from 'uuid';


const ContextApi = () => {
  const [user, setUser] = useState([
    {id : uuidV4(), name : "Afrid"},
    {id : uuidV4(), name : "Faruk"},
  ]);
  
  return (
    <> 
      <Context.Provider value={{user, setUser}}>
        <NewUser />
        <Users />
      </Context.Provider>
    </>
  )
}

export default ContextApi