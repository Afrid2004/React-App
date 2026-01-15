import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./useReducer";

export const contextApi = createContext({});

export const UserProvider = ({children}) => {

  const [users, dispatch] = useReducer(reducer, initialState);

  const value = {
     users : users.user,
     addUser : (newUser) => {
      dispatch({type: "ADD_USER", payload: newUser});
     },
     deleteUser : (id) => {
      dispatch({type: "DELETE_USER", payload: id});
     }
  }

  return <contextApi.Provider value={value}>
    {children}
  </contextApi.Provider>
}