import React from 'react';
import './PriceSlider.css';
// import RangeSlider from 'rn-range-slider';

/*import ReactDualRangeSlider from 'react-dual-range-slider';*/
/*var ReactDualRangeSlider = require('react-dual-range-slider');*/

const PriceSlider = (PriceSliderChanged) =>
{
  return(

    <div>
      price slicer
    </div>
    // <RangeSlider
    //     style={{width: 160, height: 80}}
    //     gravity={'center'}
    //     min={200}
    //     max={1000}
    //     step={20}
    //     selectionColor="#3df"
    //     blankColor="#f618"
    //     onValueChanged={ (low, high, fromUser) => {       PriceSliderChanged( low,  high)    }     }>      
    // </RangeSlider>
  )
}



// class PriceSlider extends React.Component {
//     constructor(props) {
//       super(props);
   
//       this.state = {
//         value: { min: 500, max: 8000 },
//       };
//     }
   
//     render() {
//       return (

//         <InputRange
//           formatLabel={value => `₹${value}`}
//           minValue={100}
//           maxValue={10000}         
//           value={this.state.value}
//           onChange={value => this.setState({ value })} />
//       );
//     }
//   }

export default PriceSlider;