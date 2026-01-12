import React from 'react';
import Users from './users';
import { ContextProvider } from '../../context/context';
import NewUser from './newUser';



const ContextApi = () => {
  
  return (
    <> 
      <ContextProvider>
        <NewUser />
        <Users />
      </ContextProvider>
    </>
  )
}

export default ContextApi