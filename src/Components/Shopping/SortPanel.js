import React, { useState, memo } from 'react';
import  './SortPanel.css';
import * as Constants from '../Constant'

const SortPanel = ({sortClick}) =>
{
    
    const [SortOrder, SetSortOrder] = useState({Active :Constants.HighLow});    
   
    const handelSortClick = (e) =>
    {
        SetSortOrder ({Active : e.target.name });
        sortClick(e.target.name);
    }

    return (
        <div >
            <strong className="textSort" >Sort by </strong>
            &nbsp; &nbsp;
            <button name= {Constants.HighLow} className = "buttonLink" style={ {color : SortOrder.Active=== Constants.HighLow ? 'blue' : ''}}  onClick = {handelSortClick }> Price -- High Low</button>
            &nbsp; &nbsp;
            <button name= {Constants.LowHigh} className = "buttonLink" style={ {color : SortOrder.Active=== Constants.LowHigh ? 'blue' : ''}}  onClick = {handelSortClick }>Price -- Low High</button>
            &nbsp; &nbsp;
            <button name= {Constants.discount} className = "buttonLink" style={ {color : SortOrder.Active=== Constants.discount? 'blue' : ''}}  onClick = {handelSortClick }>discount</button>
        </div>
    )
}



function arePropsEqual(prevProps, nextProps) {
    return prevProps.sortClick === nextProps.sortClick; 
  }

export default memo(SortPanel, arePropsEqual);