import React, { useRef } from 'react';
import './SearchItem.css';
// get our fontawesome imports
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <FontAwesomeIcon className="searchButton" icon={faSearch} onClick={handelSearchClick} />           
            <input type="text" className="searchInput" placeholder="Search.."  ref = {searhInputRef}/> 
        </div>
    )
}
export default SearchItem;