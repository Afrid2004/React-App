import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./useReducer";

export const contextApi = createContext({});

export const UserProvider = ({children}) => {

  const [users, dispatch] = useReducer(reducer, initialState);

  const value = {
     users : users.user,
     addUser : (payload) => {
      dispatch({type: "ADD_USER", payload: payload});
     },
     deleteUser : (payload) => {
      dispatch({type: "DELETE_USER", payload: payload});
     }
  }

  return <contextApi.Provider value={value}>
    {children}
  </contextApi.Provider>
}