import React, { memo } from 'react';
import './CartIcon.css';

// get our fontawesome imports
import { faHome, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartIcon = (CartIconClicked) => {
    return(
        <div>
            <FontAwesomeIcon  className="cartIcon" icon={faShoppingCart} onClick={() => CartIconClicked() } /> 
        </div>
    )
}

export default memo(CartIcon);
