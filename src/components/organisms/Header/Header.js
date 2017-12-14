import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { removeHash, goToTop } from 'react-scrollable-anchor'

const cx = classNames.bind(styles);
removeHash();

const Header = () => {
  return(
    <div className={cx('header')+' fluid'}>
      <div className={cx('responsive')}>
        <div className={cx('logo')}>
          <a href="/#" onClick={goToTop}>
            <img src="./images/logo_white.svg" alt="" />
            
          
          </a>
        </div>
        
        <div className={cx('nav')}>
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#partners">Partners</a></li>
            <li><a href="/#portfolio">Portfolio</a></li>
            <li><a href="/#contact">Contact</a></li>
            
            
          </ul>
        </div>
      </div>
      
        
      
    </div>
    
  );
}


export default Header;