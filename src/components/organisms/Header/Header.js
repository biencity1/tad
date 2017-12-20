import React, { Component } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { removeHash, goToTop } from 'react-scrollable-anchor';
// import { NavBtn } from 'components';

const cx = classNames.bind(styles);
removeHash();


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      "isMobileMenuOpen" : "closed"
    };
  }

  toggleMobileMenu() {
    let css = (this.state.isMobileMenuOpen === "closed") ? "open":"closed";
    this.setState({"isMobileMenuOpen":css})
  }

  render() {

    return(
      <div className={cx('header')+' fluid'}>
        <div className={cx('responsive')}>
          <div className={cx('logo')}>
            <a href="/#" onClick={goToTop}>
              <img src="./images/logo_white.svg" alt="" />
              
            
            </a>
          </div>
          
          <div className={cx('nav',this.state.isMobileMenuOpen)}>
            <ul>
              <li><a href="/#about">About</a></li>
              <li><a href="/#partners">Partners</a></li>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/#contact">Contact</a></li>
              
              
            </ul>
          </div>
          <div className={cx('nav_btn',this.state.isMobileMenuOpen)} onClick={this.toggleMobileMenu.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
        </div>
        
        <a href="/#" onClick={goToTop} className={cx('gotoTop')}>
          <div> TOP </div>
        </a>
        
      
      </div>
      
    );
  }

}


export default Header;



