export const initialState = {
    basket:[{
        id:"12354678796",
title:"The Lean StartUp:Now Constant Innovation creates ",
price: 11.96,
rating:5,
image:"https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"

    }],
    user: null,
};

const reducer = (state ,action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
          return {
              ...state,
              basket:[...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

if (index >= 0){
newBasket.splice(index,1);
}else{
    console.warn(`can't remove product (id : ${action.id})`)

}
            return {
                ...state,
                basket:newBasket
            }
            break;
        default:
            return state;
    }
}


export default reducer;