import React from 'react';
import styles from './SectionPartners.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor from 'react-scrollable-anchor';

const cx = classNames.bind(styles);

const SectionPartners = () => {
  return(
    <div className={cx('section_partners')}>
      <ScrollableAnchor id={'partners'}><div></div></ScrollableAnchor>
      <h1>OUR PARTNERS</h1>
      <div className={cx('main_partner')}>
        <img className='a' src="./images/partners_00.jpg" alt="" />
      </div>
      <div className={cx('partners')}>
        <img src="./images/partners_01.jpg" alt="" />
        <img src="./images/partners_02.jpg" alt="" />
        <img src="./images/partners_03.jpg" alt="" />
        <img src="./images/partners_04.jpg" alt="" />
        <img src="./images/partners_05.jpg" alt="" />
        <img src="./images/partners_06.jpg" alt="" />
        <img src="./images/partners_07.jpg" alt="" />
        <img src="./images/partners_08.jpg" alt="" />
        <img src="./images/partners_09.jpg" alt="" />
        <img src="./images/partners_10.jpg" alt="" />
        <img src="./images/partners_11.jpg" alt="" />
        <img src="./images/partners_12.jpg" alt="" />
      
      </div>
      
      
    </div>
  );
}


export default SectionPartners;