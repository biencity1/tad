import React from 'react';
import styles from './SectionPortfolio.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SectionPortfolio = () => {
  return(
    <div className={cx('section_portfolio')}>
      <h1>Portfolio</h1>
      사진 슬라이드
    </div>
  );
}


export default SectionPortfolio;