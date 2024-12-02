import React, { Children, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initila state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //delete transaction code is here
  function deleteTransaction(id) {
    dispatch({
      type: 'DELE',
      payload:id
    });
  }
  //add transaction code is here

  function addTransaction(transaction){
    dispatch({
      type:'ADD',
      payload:transaction
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


