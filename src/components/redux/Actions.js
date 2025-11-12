import { ADD_TO_BASKET, DELETE_ITEM_FROM_BASKET } from "./ActionNames"

export const addToBasket = (index) =>{
  return{
    type: ADD_TO_BASKET,
    payload: index
  }
}

export const deteteItemFromBasket = (index) => {
  return{
    type: DELETE_ITEM_FROM_BASKET,
    payload: index
  }
}