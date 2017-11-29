import React from 'react';
import styles from './NaverMap.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const NaverMap = () => {
  return(
    <div className={cx('naver_map')}>
      <div id='map' className={cx('map')}> Map API area here. </div>
    </div>
  );  
}


export default NaverMap;