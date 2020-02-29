import React, {useState} from 'react';
import  './Container.css';
import ShoppingItemList from './ShoppingItemList/ShoppingItemList';
import PriceSlider from './PriceSlider';
import SortPanel from './SortPanel';
import SearchItem from './SearchItem';
import * as Constants from '../Constant'

const itemS = [
    {id:9090,name:'Item1',price:200,discount:10,category:'fiction',img_url:'http://lorempixel.com/500/600/technics/'},
    {id:9091,name:'Item2',price:250,discount:15,category:'literature',img_url:'http://lorempixel.com/500/600/technics/'},
    {id:9092,name:'Item3',price:320,discount:5,category:'literature',img_url:'http://lorempixel.com/500/600/technics/'},
    {id:9093,name:'Item4',price:290,discount:0,category:'thriller',img_url:'http://lorempixel.com/500/600/technics/'},
    {id:9094,name:'Item5',price:500,discount:25,category:'thriller',img_url:'http://lorempixel.com/500/600/technics/'},
    {id:9095,name:'Item6',price:150,discount:5,category:'literature',img_url:'http://lorempixel.com/500/600/technics/'},
    {id:9096,name:'Item7',price:700,discount:22,category:'literature',img_url:'http://lorempixel.com/500/600/technics/'},
    {id:9097,name:'Item8',price:350,discount:18,category:'fiction',img_url:'http://lorempixel.com/500/600/technics/'}
];

const Container = () =>
{
    const [sortOrder, setSortOrder] = useState( Constants.HighLow)
    const [searchValue, setSearchValue] = useState( "")
    const handelSortClick = (sortOrder)=>
    {
        setSortOrder(sortOrder);        
    }
    const handelSearch = (searchValue)=>
    {
        setSearchValue(searchValue);        
    }
    const handelPriceSliderChanged = (minValue, MaxValue)=>
    {


    }

    const getDisplayItemList =()=>{

        var newItems = [...itemS]
        if(searchValue !== "")
        {
            let searchItemList = searchValue.split(',');
            searchItemList = searchItemList.map((e)=> e.trim().toLowerCase() );
            newItems = itemS.filter( el  => (searchItemList.indexOf(el.name.toLowerCase()) !== -1)  )   
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