import React from 'react';
import styles from './SectionPortfolio.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { Carousel } from 'react-responsive-carousel';


const cx = classNames.bind(styles);

const SectionPortfolio = () => {
  return(
    <div className={cx('section_portfolio')}>
      {/* <ScrollableAnchor id={'portfolio'}><div></div></ScrollableAnchor> */}
      
        <h1>PORTFOLIO</h1>

        <div className={cx('portfolio_frame')}>
          <div className={cx('pf_item')}>
            <img src="/images/slider01.jpg" />
            <p className="legend">
            왕홍 브랜드 PPL<br/>
신세계면세점 바이럴마케팅

            </p>
          </div>
          <div className={cx('pf_item')}>
            <img src="/images/slider02.jpg" />
            <p className="legend">
              왕홍 브랜드 PPL <br />
              Lapalette 바이럴마케팅
            </p>
          </div>
          <div className={cx('pf_item')}>
            <img src="/images/slider03.jpg" />
            <p className="legend">
            왕홍 브랜드 PPL <br />
화장품매장 바이럴마케팅

            </p>
          </div>
          <div className={cx('pf_item')}>
            <img src="/images/slider04.jpg" />
            <p className="legend">
            왕홍 브랜드 PPL<br/>
중국 LG 생활건강 매장 바이럴마케팅

            </p>
          </div>
          <div className={cx('pf_item')}>
            <img src="/images/slider05.jpg" />
            <p className="legend">
              Legend 
            </p>
          </div>
          <div className={cx('pf_item')}>
            <img src="/images/slider06.jpg" />
            <p className="legend">
              왕홍 브랜드 PPL <br/>
              홍콩 악세서리브랜드U.SCEN 바이럴마케팅

            </p>
          </div>
          <div className={cx('pf_item')}>
            <img src="/images/slider07.jpg" />
            <p className="legend">
            왕홍 브랜드 PPL <br />
            중국 기업행사 참여

            </p>
          </div>
          <div className={cx('pf_item','test')}>
            <img src="/images/slider07.jpg" />
            <p className="legend">
            왕홍 브랜드 PPL<br />
            중국 기업행사 참여

            </p>
          </div>
        
        </div>

    
      
      
      
    </div>
  );
}


export default SectionPortfolio;