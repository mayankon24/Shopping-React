import React, {useState, useEffect} from 'react';
import  './ShoppingItem.css';
import ShoppingItemList from '../../Components/Shopping/ShoppingItemList/ShoppingItemList';
import PriceSlider from '../../Components/Shopping/PriceSlider';
import SortPanel from '../../Components/Shopping/SortPanel';
import SearchItem from '../../Components/Shopping/SearchItem';
import CartIcon from '../../Components/Shopping/CartIcon';
import * as Constants from '../../Shared/Constant'

const Container = () =>
{
    var apiCalled = false;
    const [items, setitems] = useState([]);
    const [sortOrder, setSortOrder] = useState( Constants.HighLow)
    const [searchValue, setSearchValue] = useState( "")
    const [PriceSliderValue, setPriceSliderValue] = useState(1000)
    const callItemApi = ()=>{

        fetch('https://api.myjson.com/bins/qzuzi')
        .then(res => res.json())
        .then((data) => {

            let dataNew = data.map( (i)=>   {
                i["sellingPrice"] = i.price - i.discount  ;
                i["discountPercentage"] = ((i.discount*100)/i.price).toFixed(2);

              return i;
            }
            );
            setitems(dataNew);
        })
        .catch(console.log);
        apiCalled = true;
    }
    useEffect(callItemApi, apiCalled);
   
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

        var newItems = [...items]
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
        return [...newItems];
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
export default Container;