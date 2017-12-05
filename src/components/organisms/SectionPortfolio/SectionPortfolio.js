import React from 'react';
import styles from './SectionPortfolio.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';


const cx = classNames.bind(styles);

const SectionPortfolio = () => {
  return(
    <div className={cx('section_portfolio')}>
      <ScrollableAnchor id={'portfolio'}><div></div></ScrollableAnchor>
      <div className={cx('responsive')}>
        <h1>PORTFOLIO</h1>

        <div className={cx('slider_area')}>
          <Carousel autoPlay infiniteLoop centerMode centerSlidePercentage={70} emulateTouch showThumbs={false} showStatus={false}>
            <div>
              <img src="/images/slider01.jpg" />
              <p className="legend">
                Legend 
              </p>
            </div>
            <div>
              <img src="/images/slider02.jpg" />
              <p className="legend">
                Legend 
              </p>
            </div>
            <div>
              <img src="/images/slider03.jpg" />
              <p className="legend">
                Legend 
              </p>
            </div>
            <div>
              <img src="/images/slider04.jpg" />
              <p className="legend">
                Legend 
              </p>
            </div>
            <div>
              <img src="/images/slider05.jpg" />
              <p className="legend">
                Legend 
              </p>
            </div>
            <div>
              <img src="/images/slider06.jpg" />
              <p className="legend">
                Legend 
              </p>
            </div>
            <div>
              <img src="/images/slider07.jpg" />
              <p className="legend">
                Legend 
              </p>
            </div>
          </Carousel>
        </div>

      </div>
      
      
    </div>
  );
}


export default SectionPortfolio;