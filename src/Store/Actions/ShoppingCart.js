import * as actionTypes from './ActionType';


const addCartItem = (itemId) =>{
    return {

        type:actionTypes.ADD_CART_ITEM,
        itemId:itemId
    }
}

const removeCartItem = (itemId) =>{
    return {

        type:actionTypes.REMOVE_CART_ITEM,
        itemId:itemId
    }
}