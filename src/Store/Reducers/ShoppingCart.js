import * as actionTypes from '../Actions/ActionType';

const addCartItem = (state, action) =>{
    let updatedCartItemIds = [...state.CartItemIds];

    if  (updatedCartItemIds[action.itemId] == null){
        updatedCartItemIds[action.itemId] = 1;
    }
    else{
        updatedCartItemIds[action.itemId] = updatedCartItemIds[action.itemId] + 1;        
    }
    
    return {
        ...state,
        CartItemIds : updatedCartItemIds //state.CartItemIds.push(action.itemId)
    }
}

const removeCartItem = (state, action) =>{
    let updatedCartItemIds = [...state.CartItemIds];

    updatedCartItemIds[action.itemId] = updatedCartItemIds[action.itemId] -1;

     return {
        ...state,
        CartItemIds : updatedCartItemIds //state.CartItemIds.push(action.itemId)
    }
}

const setShoppingItems = (state, action) =>{

    return {
        ...state,
        ShoppingItems : action.Items
    }
}

const fetchShoppingItemsFailed = (state, action) =>{

    return {
        ...state,
        Error : true
    }
}

const initialState = {
    ShoppingItems : null,
    CartItemIds:null,
    Error: false
}


const reducer = (state = initialState, action)=>{

    switch(action.type)
    {
        case actionTypes.ADD_CART_ITEM : return addCartItem(state, action);
        case actionTypes.REMOVE_CART_ITEM : return removeCartItem(state, action);
        case actionTypes.SET_SHOPPING_ITEMS : return setShoppingItems(state, action);
        case actionTypes.FETCH_SHOPPING_ITEMS_FAILED : return fetchShoppingItemsFailed(state, action);
        default : return state;        
    }
}
export default reducer;