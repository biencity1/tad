import React from 'react';
import styles from './SectionPartners.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SectionPartners = () => {
  return(
    <div className={cx('section_partners')}>
      <h1>Our partners</h1>
      약 13개의 img logos
    </div>
  );
}


export default SectionPartners;