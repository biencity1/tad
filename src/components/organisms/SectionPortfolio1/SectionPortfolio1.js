import React from 'react';
import styles from './SectionPortfolio1.scss';
import classNames from 'classnames/bind';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { Carousel } from 'react-responsive-carousel';

const cx = classNames.bind(styles);

class SectionPortfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addClass:'',
      removeClass:''
    };

    
    
  }

  _hOver(e){
    this.setState({
      addClass : e.idx,
      removeClass: e.idx
    });
    
    
  }


  render() {
    // console.log(this.state.addClass);
    let checkAdd = this.state.addClass;
    let checkRemove = this.state.removeClass;
    // console.log('add:'+checkAdd+',remove:'+checkRemove);

    let arr = [['왕홍 브랜드 PPL ','신세계면세점 바이럴마케팅'],
    ['왕홍 브랜드 PPL ','Lapalette 바이럴마케팅'],
    ['왕홍 브랜드 PPL ','화장품매장 바이럴마케팅'],
    ['왕홍 브랜드 PPL ','중국 LG 생활건강 매장 바이럴마케팅'],
    ['왕홍 브랜드 PPL ','화장품매장 바이럴마케팅'],
    ['왕홍 브랜드 PPL ','홍콩 악세서리브랜드U.SCEN 바이럴마케팅'],
    ['왕홍 브랜드 PPL ','중국 기업행사 참여'],
    ['왕홍 브랜드 PPL ','중국 기업행사 참여']];
    
    const _div = <div></div>;
    let _p = arr.map((x,idx)=> {return <p className="legend">{x[0]}<br />{x[1]}</p>});

    let test = _p.map((x, idx)=> {return <div key={idx} className={cx('pf_item',(checkAdd===idx)?"active":"")} onMouseOut={this._hOver.bind(this,{idx}+1)} onMouseOver={this._hOver.bind(this,{idx})}>{_div}{x}</div>});
    
    return (
      <div className={cx('section_portfolio')}>
        <ScrollableAnchor id={'portfolio'}><div></div></ScrollableAnchor>

        <h1>PORTFOLIO</h1>


        <div className={cx('portfolio_frame')}>

          {test}

{/* 
          <div className={cx('pf_item')} onMouseOver={this._hOver}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL<br />
              신세계면세점 바이럴마케팅
            </p>
          </div>


          <div className={cx('pf_item')}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL <br />
              Lapalette 바이럴마케팅
            </p>
          </div>

          <div className={cx('pf_item')}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL <br />
              화장품매장 바이럴마케팅
            </p>
          </div>

          <div className={cx('pf_item')}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL<br />
              중국 LG 생활건강 매장 바이럴마케팅
            </p>
          </div>

          <div className={cx('pf_item')}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL <br />
              화장품매장 바이럴마케팅
            </p>
          </div>

          <div className={cx('pf_item')}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL <br />
              홍콩 악세서리브랜드U.SCEN 바이럴마케팅
            </p>
          </div>

          <div className={cx('pf_item')}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL <br />
              중국 기업행사 참여
            </p>
          </div>

          <div className={cx('pf_item', 'test')}>
            <div></div>
            <p className="legend">
              왕홍 브랜드 PPL<br />
              중국 기업행사 참여
            </p>
          </div> */}

        </div>





      </div>
    );
  }
}

export default SectionPortfolio;