import React from 'react';
import styles from './NavBtn.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavBtn = ({isOpen}) => {
  let propsCss = isOpen;
  console.log(isOpen);
  return(
    <div className={cx('nav_btn',propsCss)}>
    
    </div>
  );
}


export default NavBtn;