import React from 'react';
import styles from './SectionContact.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor,{ goToTop } from 'react-scrollable-anchor';
import {NaverMap} from 'components';

const cx = classNames.bind(styles);

const SectionContact = () => {




  return(
    <div className={cx('section_contact')}>
      <ScrollableAnchor id={'contact'}><div></div></ScrollableAnchor>
      
      <h1>CONTACT US</h1>
        <NaverMap />


        <div className={cx('contact_container')}>
          <div className={cx('map_area')}>
              
            <h3>TAD</h3>
          
            <span>4F,240-64, YEONNANDONG MAPOGU, SEOUL</span> 
          </div>
          <div className={cx('contact_from')}>
            
            <span>메세지 남겨주시면 연락드리겠습니다.</span> 
            <form action="">
              <span>Name</span>
              <input type="name" />
              <span>Phone Number</span>
              <input type="phone" />
              <span>E-mail</span>
              <input type="email" />
              <span>Message</span>
              <textarea name="comment" id="" cols="40" rows="6"></textarea>
              <span>
              <button>작성 완료</button>
              </span>
              
            </form>

          </div>

          </div>
        </div>
  );
}


export default SectionContact;