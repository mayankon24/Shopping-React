import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import './PriceSlider.css';
import 'react-rangeslider/lib/index.css'  // To include the default styles

class PriceSlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      horizontal: 1000    
    }
  }

  handleChangePrice = value => {
    this.setState({      horizontal: value     })    
  };
  
  handleChangePriceComplete = () =>{
    this.props.PriceSliderChanged(this.state.horizontal);
  }

  render () {
    const { horizontal } = this.state
    const horizontalLabels = {
      0: '0',
      50: 'Price',
      1000: '1000'
    }

    const formatPrice = value => '₹' +value 


    return (
      <div className='slider custom-labels'>
        <Slider
          min={0}
          max={1000}
          value={horizontal}
          labels={horizontalLabels}
          format={formatPrice}
          handleLabel={horizontal}
          onChange={this.handleChangePrice}
          onChangeComplete = {this.handleChangePriceComplete }
        />
        <br></br>
        <br></br>
        <div style={ { textAlign: "center"}} className='value'>{formatPrice (horizontal)}</div>
        
      </div>
    )
  }
}

export default PriceSlider