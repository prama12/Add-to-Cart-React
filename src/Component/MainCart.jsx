import React, { createContext, useReducer } from 'react'
import Cart from './Layout/Cart'
import { reducer } from './Reducer';
import Sdata from './Data-API/Products';

export const CartContext = createContext()

const initialState = {
     item: Sdata,
     totalamount: 0,
     totalItem: 0,

};

const MainCart = () => {

     const [state, dispatch] = useReducer(reducer, initialState)

     //to delete the indv. element from a card.
     const removeItem = (id) => {
          return dispatch({
               type: "REMOVE_ITEM",
               payload: id,
          });
     };

     return (
          <>
               <CartContext.Provider value={{ ...state, removeItem }}>
                    <Cart />
               </CartContext.Provider>
          </>
     )
}

export default MainCart