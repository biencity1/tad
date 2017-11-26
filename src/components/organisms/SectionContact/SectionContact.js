import React from 'react';
import styles from './SectionContact.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SectionContact = () => {
  return(
    <div className={cx('section_contact')}>
      <div>지도영역</div>
      <div>
        <h3>TAD</h3>

      </div>
      
4F,240-64, YEONNANDONG MAPOGU, SEOUL
메세지 남겨주시면 연락드리겠습니다

Name
Phone Number
E-mail
Message



    </div>
  );
}


export default SectionContact;