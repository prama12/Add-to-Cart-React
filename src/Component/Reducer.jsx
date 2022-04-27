

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

     //Increment cart item
     if (action.type === "INCREMENT") {
          let updateCart = state.item.map((curElem) => {
               if (curElem.id === action.payload) {
                    return { ...curElem, amount: curElem.amount + 1 };
               }
               return curElem;
          });
          return { ...state, item: updateCart }
     }

     //Decrement cart item
     if (action.type === "DECREMENT") {
          let updateCart = state.item.map((curElem) => {
               if (curElem.id === action.payload) {
                    return { ...curElem, amount: curElem.amount - 1 };
               }
               return curElem;
          })
               .filter((curElem) => {
                    return curElem.amount !== 0;
               });

          return { ...state, item: updateCart }
     }


     // Update cart amount with totalItem and totalAmount
     if (action.type === "GET_TOTAL") {
          let { totalItem, totalAmount, eachUpdateAmount } = state.item.reduce(
               (accum, curVal) => {
                    let { price, amount } = curVal;

                    let updateTotalAmount = price * amount;
                    accum.totalAmount += updateTotalAmount;

                    accum.totalItem += amount;
                    return accum;
               },

               {
                    totalItem: 0,
                    totalAmount: 0,
               }
          );
          return { ...state, totalItem, totalAmount };
     }
     return state;
};