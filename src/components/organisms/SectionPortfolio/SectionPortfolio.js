import React from 'react';
import styles from './SectionPortfolio.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor,{ goToTop } from 'react-scrollable-anchor';

const cx = classNames.bind(styles);

const SectionPortfolio = () => {
  return(
    <div className={cx('section_portfolio')}>
      <ScrollableAnchor id={'portfolio'}><div></div></ScrollableAnchor>
      <div className={cx('responsive')}>
        <h1>PORTFOLIO</h1>

        <div className={cx('slider_area')}>
        
          사진 슬라이드

        </div>

      </div>
      
      
    </div>
  );
}


export default SectionPortfolio;