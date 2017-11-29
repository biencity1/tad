import React from 'react';
import styles from './SectionMain.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const sectionStyle = {
  backgroundImage: "url('./images/main_img_small.jpg')",
  backgroundSize: 'cover'
};

const SectionMain = () => {
  return(
    <div className={cx('section_main',{sectionStyle})}>

      <div className={cx('responsive')}>
        <div className={cx('title')}>
            <strong>T</strong>OWARD <strong>A</strong> <strong>D</strong>REAM 
        </div>
        <img src="./images/main_img.jpg" alt=""/>
        
        <div className={cx('slogan')}>
            엔터테인먼트의 새로운 패러다임<br />
            일류 크로스보더기업 TAD 입니다    
        </div>
      </div>
      <div className={cx('crop')}>
        <img src="./images/diagonal_line.svg" alt="" />
        <div className={cx('bottom_line_remover')}></div>
      </div>
      <div className={cx('main_img_blur')} style={sectionStyle}>
      </div>
      

    </div>
  );
}


export default SectionMain ;