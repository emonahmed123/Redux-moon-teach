import { type } from "@testing-library/user-event/dist/type"
import { ADD_TO_CART, REMOVE_TO_CART } from "../actionType/actionType"

export const addTocar=(product)=>{
     return{
        type:ADD_TO_CART,
        payload:product
     }
};

export const removeFromCart =(product)=>{
 return{
   type:REMOVE_TO_CART,
   payload:product
 }

}

