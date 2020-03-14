import * as actionTypes from './ActionType';
import axios from 'axios';


export const addCartItem = (itemId) =>{
    return {

        type:actionTypes.ADD_CART_ITEM,
        itemId:itemId
    }
}

export const removeCartItem = (itemId) =>{
    return {

        type:actionTypes.REMOVE_CART_ITEM,
        itemId:itemId
    }
}

const setShoppingItems = (Items) =>{

    return{
        type: actionTypes.SET_SHOPPING_ITEMS,
        Items: Items
    }
}

const fetchShoppingItemsFailed = () =>{

    return{
        type: actionTypes.SET_SHOPPING_ITEMS
    }
}

export const fetchShoppingItems = () =>{

    return dispatch => {
        axios.get( 'https://api.myjson.com/bins/qzuzi' )
            .then( response => {
               dispatch(setShoppingItems(response.data));
            } )
            .catch( error => {
                dispatch(fetchShoppingItemsFailed());
            } );
    };
}