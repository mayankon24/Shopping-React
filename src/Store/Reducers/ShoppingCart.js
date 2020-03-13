import * as actionTypes from '../Actions/ActionType';

const fetchShoppingItems = (state, action) =>{

    return {
        ...state,
        ShoppingItems : action.Items
    }
}

const addCartItem = (state, action) =>{
    let updatedCartItemIds = [...state.CartItemIds];
    updatedCartItemIds[action.itemId] = updatedCartItemIds[action.itemId] +1;

    return {
        ...state,
        CartItemIds : updatedCartItemIds //state.CartItemIds.push(action.itemId)
    }
}

const removeCartItem = (state, action) =>{

    return {
        ...state,
        CartItemIds : state.CartItemIds.filter(x=> x !== action.itemId )
    }
}


const initialState = {
    ShoppingItems : null,
    CartItemIds:null
    
}


const reducer = (state = initialState, action)=>{

    switch(action.type)
    {
        case actionTypes.FETCH_SHOPPING_ITEM : return fetchShoppingItems();
        case actionTypes.ADD_CART_ITEM : return addCartItem();
        case actionTypes.REMOVE_CART_ITEM : return removeCartItem();
        default : return state;        
    }
}

export default reducer;