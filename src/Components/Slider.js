import React from 'react';


const Slider = (props) =>{
    return(
      <div className="sliderContainer">
        <div className="sliderText">
        </div>
        <img src={props.img} alt={props.imgDesc} />
      </div>
    );

}

export default Slider;
