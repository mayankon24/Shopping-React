import React, {useState, useEffect} from 'react';
import  './Container.css';
import ShoppingItemList from './ShoppingItemList/ShoppingItemList';
import PriceSlider from './PriceSlider';
import SortPanel from './SortPanel';
import SearchItem from './SearchItem';
import * as Constants from '../Constant'

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
            setitems(data);
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

    const getDisplayItemList =()=>{

        var newItems = [...items]
        newItems = newItems.filter((item)=> item.price <= PriceSliderValue );

        if(searchValue !== "")
        {
            let searchItemList = searchValue.split(',');
            searchItemList = searchItemList.map((e)=> e.trim().toLowerCase() );
            newItems = newItems.filter( el  => (searchItemList.indexOf(el.name.toLowerCase()) !== -1)  )   
        }     


        if (sortOrder === Constants.HighLow)
         {
            newItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
         }
         else if (sortOrder === Constants.LowHigh)
         {
            newItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            newItems.reverse();
         }
         else{
            newItems.sort((a, b) => parseFloat(a.discount) - parseFloat(b.discount));
         }
        return [...newItems];
    }


    return(

        <div className= "container">
            <div className= "containerHeader" >
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