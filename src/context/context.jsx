import React, { createContext, useState } from "react";
import { v4 as uuidV4 } from 'uuid';

export const Context = createContext({});

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState([
    {id : uuidV4(), name : "Afrid"},
    {id : uuidV4(), name : "Faruk"},
  ]);

  return <Context.Provider value={{user, setUser}}>
    {children}
  </Context.Provider>

}