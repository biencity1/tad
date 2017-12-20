import React from 'react';
import styles from './Slider.scss';
import classNames from 'classnames/bind';
import SlickSlider from 'react-slick';


const cx = classNames.bind(styles);

var settings = {
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true
  
};

const Slider = () => {
  return(
    <div className={cx('slider_container')}>
      <SlickSlider {...settings}>
        <div>
          <img src="/images/slider01.jpg" alt="aaa" />
          <p className="legend">
            Legend 
          </p>
        </div>
        
      </SlickSlider>
    </div>
  );
}


export default Slider;