import React, { useRef } from 'react';
import './SearchItem.css';


const SearchItem = ({searchClick})=>
{
    const searhInputRef= useRef();
    const handelSearchClick = () =>
    {
        var value = searhInputRef.current.value;
        searchClick(value);       
    };


    return (
        <div>
            <button className="searchButton"  onClick={handelSearchClick}> 
            </button>
            <input type="text" className="searchInput" placeholder="Search.."  ref = {searhInputRef}/> /> 
        </div>
    )
}

export default SearchItem;