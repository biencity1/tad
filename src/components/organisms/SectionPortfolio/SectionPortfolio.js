import React from 'react';
import styles from './SectionPortfolio.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { Carousel } from 'react-responsive-carousel';
import {Slider} from 'components';

const cx = classNames.bind(styles);

const SectionPortfolio = () => {
  return(
    <div className={cx('section_portfolio')}>
      <ScrollableAnchor id={'portfolio'}><div></div></ScrollableAnchor>
      <div className={cx('responsive')}>
        <h1>PORTFOLIO</h1>

        


        <div className={cx('slider_area')}>
          
          <Slider />
            
          
        </div>

      </div>
      
      
    </div>
  );
}


export default SectionPortfolio;