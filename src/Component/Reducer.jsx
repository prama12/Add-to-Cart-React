export const reducer = (state, action) => {

     //Remove Item For individual data from card
     if (action.type === "REMOVE_ITEM") {
          return {
               ...state,
               item: state.item.filter((curElem) => {
                    return curElem.id !== action.payload;
               })
          }
     }

     //Clear All data From Card
     if (action.type === "CLEAR_CART") {
          return { ...state, item: [] };
     }

     return state;
};