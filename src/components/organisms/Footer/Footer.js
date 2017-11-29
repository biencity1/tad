import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor,{ goToTop } from 'react-scrollable-anchor';

const cx = classNames.bind(styles);

const Footer = () => {
  return(
    <div className={cx('footer')}>
      
      <div className={cx('crop')}>
        <div className={cx('bottom_line_remover')}></div>
        <img src="./images/diagonal_line.svg" alt="" />
        
      </div>
      <span>© Toward A Dream. All Rights Reserved.</span>
      

    </div>
  );
}


export default Footer;