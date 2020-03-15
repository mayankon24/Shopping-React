import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import  './ShoppingItem.css';
import * as Action from '../../Store/Actions/Index';
import ShoppingItemList from '../../Components/Shopping/ShoppingItemList/ShoppingItemList';
import PriceSlider from '../../Components/Shopping/PriceSlider';
import SortPanel from '../../Components/Shopping/SortPanel';
import SearchItem from '../../Components/Shopping/SearchItem';
import CartIcon from '../../Components/Shopping/CartIcon';
import * as Constants from '../../Shared/Constant'

const ShoppingItemContainer = () =>
{
    let apiCalled = false;

    const {ShoppingItems} = useSelector( (state) => (
            {
                ShoppingItems : state.ShoppingCart.ShoppingItems
            }), shallowEqual );
    const dispatch = useDispatch();  
    
    
    const [sortOrder, setSortOrder] = useState( Constants.HighLow)
    const [searchValue, setSearchValue] = useState( "")
    const [PriceSliderValue, setPriceSliderValue] = useState(1000)




    const fetchShoppingItems = ()=>{


        dispatch( ()=> dispatch(Action.fetchShoppingItems())   );
       
        // fetch('https://api.myjson.com/bins/qzuzi')
        // .then(res => res.json())
        // .then((data) => {

        //     let dataNew = data.map( (i)=>   {
        //         i["sellingPrice"] = i.price - i.discount  ;
        //         i["discountPercentage"] = ((i.discount*100)/i.price).toFixed(2);

        //       return i;
        //     }
        //     );
        //     setitems(dataNew);
        // })
        // .catch(console.log);

        
        apiCalled = true;
    }
    useEffect(fetchShoppingItems, apiCalled);
   
    const handelSortClick = (sortOrder)=>
    {
        setSortOrder(sortOrder);        
    }
    const handelSearch = (searchValue)=>
    {
        setSearchValue(searchValue);        
    }
    const handelPriceSliderChanged = (value)=>
    {
        setPriceSliderValue(value);
    }
    const handelCartIconClicked = () =>    {

    }

    const getDisplayItemList =()=>{
              
        let newItems = ShoppingItems
        if (newItems === undefined)
            return []; 

        newItems = newItems.filter((item)=> item.price <= PriceSliderValue );

        if(searchValue !== "")
        {
            let searchItemList = searchValue.split(',');
            searchItemList = searchItemList.map((e)=> e.trim().toLowerCase() );
            newItems = newItems.filter( el  => (searchItemList.indexOf(el.name.toLowerCase()) !== -1)  )   
        }     


        if (sortOrder === Constants.LowHigh )
         {
            newItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
         }
         else if (sortOrder === Constants.HighLow)
         {
            newItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            newItems.reverse();
         }
         else{
            newItems.sort((a, b) => parseFloat(a.discountPercentage) - parseFloat(b.discountPercentage));
         }
        return newItems;
    }


    return(

        <div className= "container">
            <div className= "containerHeader" >
                <CartIcon CartIconClicked = {handelCartIconClicked} cartCount = {2} />
                <SearchItem searchClick={ handelSearch }/>               
            </div>
            <div className= "containerBody">
                <div className = "containerFilter">
                    <PriceSlider PriceSliderChanged = { handelPriceSliderChanged }/>
                </div>

                <div className= "containerItem">                   
                    <div className="sortPanel">
                        <SortPanel sortClick = { handelSortClick } />
                    </div>
                    <div className ="itemPanel">
                        <div >
                            <ShoppingItemList itemList= {getDisplayItemList()} />
                        </div>
                    </div>
                   
                </div> 
            </div>
            <div className= "containerBottom">@Copyrights</div>
        </div>
    )
}



// const mapDispatchtoProp = (dispatch) =>{
//     return{
//         onFetchShoppingItems : () => { dispatch(Action.fetchShoppingItems()) }
//     }
// }

export default ShoppingItemContainer;