import React from 'react'
import Classes from './ShoppingItemList.css'
import ShoppingItem from './ShoppingItem/ShoppingItem'



const ShoppingItemList = ({itemList}) =>
{
    return(
        <div>
            {
                itemList.map((item)=>
                (
                    <div key={item.id}>
                        <ShoppingItem 
                        id = {item.id}
                        name = {item.name}
                        price = {item.price}
                        discount = {item.discount}
                        category = {item.category}
                        img_url = {item.img_url}     
                        />
                    </div>
                )
                )
            }
        </div>
    )
};

export default ShoppingItemList;