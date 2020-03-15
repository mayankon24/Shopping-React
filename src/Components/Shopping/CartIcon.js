import React, { memo } from 'react';
import './CartIcon.css';

// get our fontawesome imports
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartIcon = ({cartCount, CartIconClicked}) => {
    return(
        <div>            
            <FontAwesomeIcon  className="cartIcon" icon={faShoppingCart} onClick={() => CartIconClicked() } />
            <div className="cartIcon">  {cartCount}</div>            
        </div>
    )
}

export default memo(CartIcon);
