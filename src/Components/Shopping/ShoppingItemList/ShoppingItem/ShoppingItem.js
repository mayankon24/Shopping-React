import React from 'react'
import './ShoppingItem.css'



const ShoppingItem = ({id, name, price, discount, category, img_url, sellingPrice, discountPercentage}) =>
{

   
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
                <button className= "button roundButton" >Add to Cart </button>
            </div>
        </div>
    )
}

export default ShoppingItem;