import { ADD_TO_CART ,REMOVE_TO_CART} from "../actionType/actionType";

const initialState={
    cart:[],

};

const productReducer=(state=initialState,action)=>{
  
       const selectedProduct =state.cart.find((product)=>product._id==action.payload._id)
     
       switch(action.type){
        case ADD_TO_CART:
            if(selectedProduct){
                    selectedProduct.quantity=selectedProduct.quantity+1
                    const newCart = state.cart.filter((product)=>product._id !==selectedProduct._id)
                    return{
                    ...state,
                    cart:[...newCart,selectedProduct]
                }
            }
        return{
            ...state,
            cart:[...state.cart,{...action.payload,quantity:1}]

        };
        case REMOVE_TO_CART:
       
        if(selectedProduct.quantity>1){
            selectedProduct.quantity=selectedProduct.quantity-1
            const newCart = state.cart.filter((product)=>product._id !==selectedProduct._id)
            return{
            ...state,
            cart:[...newCart,selectedProduct]
        }
    }
       
       
       
        return{
            ...state,
            cart:state.cart.filter((product)=>product._id !==action.payload._id)
        };
        default:
        return state

    }
    
    
    
}

export default productReducer