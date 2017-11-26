import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return(
    <div className={cx('footer')}>
      © Toward A Dream. All Rights Reserved.
    </div>
  );
}


export default Footer;