import React from 'react';
import styles from './SectionMain.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SectionMain = () => {
  return(
    <div className={cx('section_main')}>
      <img src="" alt="" />메인이미지

      <br />
      <br />
      
      엔터테인먼트의 새로운 패러다임 <br />
      일류 크로스보더기업 TAD 입니다

    </div>
  );
}


export default SectionMain ;