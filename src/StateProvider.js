import React from "react";
import { createContext, useReducer, useContext } from "react";

// datalayer

export const StateContext = createContext();

// Provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we usw it inside of a component
export const useStateValue = () => useContext(StateContext);
