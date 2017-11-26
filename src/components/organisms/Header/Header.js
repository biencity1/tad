import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  return(
    <div className={cx('header')}>
      <div className={cx('logo')}>
        <img src="" alt="" />로고
      </div>
      
      <div className="nav">
        <ul>
          <li>About</li>
          <li>Partners</li>
          <li>Portfolio</li>
          <li>Contact</li>
          
        </ul>
      </div>
    </div>
    
  );
}


export default Header;