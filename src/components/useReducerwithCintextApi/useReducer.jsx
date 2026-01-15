import React from "react";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
    user : [
      {id : uuidv4(), name : "Afrid"},
      {id : uuidv4(), name : "Fardin"},
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_USER":
            return{
              ...state,
              user : [...state.user, action.payload],
            }
      case "DELETE_USER":
            const filteredUser = [...state.user].filter(user => user.id !== action.payload);
            return{
              ...state,
              user : filteredUser,
            } 
      default:
        return state;
    }
}