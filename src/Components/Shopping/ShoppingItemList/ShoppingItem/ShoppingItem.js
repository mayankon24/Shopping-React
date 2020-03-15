import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import * as Action from '../../../../Store/Actions/Index'
import './ShoppingItem.css'



const ShoppingItem = ({id, name, price, discount, category, img_url, sellingPrice, discountPercentage}) =>
{
    const [itemId] = useState(id);
    const dispatch = useDispatch();
   
    const handelAddCartClick = ()=>{
        dispatch(Action.addCartItem(itemId) );
    }


    return(
        <div className="div-container">
            <img src = {img_url} height = "150" width = "100%"  alt="" />
            <div>  {name} </div> 
            <div>
                <strong>₹{sellingPrice}</strong>   
                <span className="text-price"> {price} </span> 
                &nbsp; 
                <span className="text-discount"> {discountPercentage}%  off  </span> 
            </div>
            <div className="div-button"> 
                <button className= "button roundButton" onClick = {handelAddCartClick} >Add to Cart </button>
            </div>
        </div>
    )
}

export default ShoppingItem;