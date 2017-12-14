import React from 'react';
import styles from './SectionContact.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor,{ goToTop } from 'react-scrollable-anchor';
import {NaverMap, Contact} from 'components';


const cx = classNames.bind(styles);

const SectionContact = () => {




  return(
    <div className={cx('section_contact')}>
      <ScrollableAnchor id={'contact'}><div></div></ScrollableAnchor>
      
      <h1>CONTACT US</h1>
        <NaverMap />


        <div className={cx('contact_container')}>
          <div className={cx('map_area_img')}>
            <div className={cx('info')}>
              <h3>TAD</h3>
              <span>4F,240-64, YEONNANDONG MAPOGU, SEOUL</span> 
            </div>
            
          </div>
          <div className={cx('contact_from')}>
            
            <span>메세지 남겨주시면 연락드리겠습니다.</span> 
            
            <div className={cx('input_frame')}>
              <input type="name" />
              <div className={cx('place_holder')}>
                Name
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>
              
            <div className={cx('input_frame')}>
              <input type="phone" />
              <div className={cx('place_holder')}>
                Phone Number
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>

            <div className={cx('input_frame')}>
              <input type="email" />
              <div className={cx('place_holder')}>
                E-mail
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>

            <div className={cx('input_frame')}>
              <textarea name="comment" id="" cols="40" rows="6" placeholder="Message"></textarea>
              <span><button>작성 완료</button></span>
            </div>
              
              
            

          </div>

            <Contact />



          </div>
        </div>
  );
}


export default SectionContact;