import React from 'react';
import styles from './SectionAbout.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor,{ goToTop } from 'react-scrollable-anchor';


const cx = classNames.bind(styles);

const SectionAbout = () =>{ 

  return(
    
    <div className={cx('section_about')}>
      <ScrollableAnchor id={'about'}><div></div></ScrollableAnchor>

      <div className={cx('why')}>
      
        <h1>WHY? 왕홍마케팅</h1>
        
        <ul>
          <li>중국 인플루언서 '왕홍'</li>
          <li>중국 모바일 광고비용 TV광고 추월</li>
          <li>모바일 사용자 80%, 컴퓨터 사용자 20%</li>
          <li></li>
          <li>2016년 왕홍산업 전체규모 약 530억위안(9조원)</li>
          <li>2018년 1,016억위안 성장예정</li>
        </ul>

      </div>
      
      <div className={cx('tad_think')}>
        <h1>중국마케팅의 선두기업TAD</h1>
        <span>선진화된 한국의 엔터테인먼트문화를 각국에 수출하고</span>
        <span>
          국내 브랜드만이 가진 양질의 기술과 소프트웨어를 중국에 소개하는것이</span>
        <span>
          일류 크로스보더기업의 역할이라 생각합니다.
        </span>
        
      </div>

      <h1>STRONG POINT</h1>    
      <div className={cx('strong_point')}>
          
        
        <div>
          <img src="./images/strong_01.jpg" alt="" />
          <h2>서울 북경 오피스</h2>
          <span>양국간 유기적인 업무진행을 위한 오피스운영</span>
        </div>
        <div>
        <img src="./images/strong_02.jpg" alt="" />
          <h2>마케팅전문 왕홍</h2>
          <span>합리화된 비용으로 중국진출의 기회</span>
        </div>
        <div>
        <img src="./images/strong_03.jpg" alt="" />
          <h2>커머스 왕홍</h2>
          <span>중국 최대 쇼핑몰 타오바오왕홍을 통한 제품판매</span>
        </div>





      </div>      

    </div>
  );
}


export default SectionAbout;