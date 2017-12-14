import React, { Component } from 'react';
import axios from 'axios';
import styles from './Contact.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// Contact component render contact form
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactName: '',
      contactPhoneNum:'',
      contactEmail: '',
      contactMessage: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangePhone = this._handleChangePhone.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangeMsg = this._handleChangeMsg.bind(this);
  }

  // Change state of input field so text is updated while typing
  _handleChangeName(e){
    this.setState({
      contactName: e.target.value,
    });
  }
  _handleChangePhone(e){
    this.setState({
      contactPhoneNum: e.target.value,
    });
  }
  _handleChangeEmail(e) {
    this.setState({
      contactEmail: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  _handleChangeMsg(e) {
    this.setState({
      contactMessage: e.target.value
    });
  }

  _handleSubmit(e) {
    
    e.preventDefault();
    this.setState({
      contactName: '',
      contactPhoneNum: '',
      contactEmail: '',
      contactMessage: ''
    });

    // $.ajax({
    //   url: process.env.NODE_ENV !== "production" ? '/getMail' : "http://www.fransbernhard.se/magden/php/mailer.php",
    //   type: 'POST',
    //   data: {
    //     'form_email': this.state.contactEmail,
    //     'form_msg': this.state.contactMessage
    //   },
    //   cache: false,
    //   success: function(data) {
    //     // Success..
    //     this.setState({
    //       contactEmail: 'success',
    //       contactMessage: '<h1>Kontakt skickad!</h1><p>Återkommer så fort som möjligt.</p>'
    //     });
    //     $('#formContact').slideUp();
    //     $('#formContact').after(this.state.contactMessage);
    //     console.log('success', data);
    //   }.bind(this),
    //   // Fail..
    //   error: function(xhr, status, err) {
    //     console.log(xhr, status);
    //     console.log(err);
    //     this.setState({
    //       contactEmail: 'danger',
    //       contactMessage: '<h1>Sorry det blev fel</h1><p>Försök gärna igen, eller mejla mig direkt på magdamargaretha@gmail.com</p>'
    //     });
    //     console.log(this.state.contactEmail + this.state.contactMessage + 'fail');
    //   }.bind(this)
    // });


    axios.post('/mailer.php', {
        form_name: this.state.contactName,
        form_phone: this.state.contactPhoneNum,
        form_email: this.state.contactEmail,
        form_msg : this.state.contactMessage
      
    })
    .then(data => {
      
      this.setState({
        contactName: '',
        contactPhoneNum: '',
        contactEmail: 'success',
        contactMessage: '문의가 접수되었습니다.'
            });
      console.log('success', data);
    })
    .catch(e => {
      console.log(e);
    });

  }
  
  render() {
    return (
      <div className={cx('contact_form')} id="contact">
        
          <form className="form" onSubmit={this._handleSubmit} id="formContact">
            
                
              <div className={cx('input_frame')}>
              <input id="formName" type="text" name="formName" value={this.state.contactName} onChange={this._handleChangeName} required/>
              <div className={cx('place_holder')}>
                Name
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>
              
            <div className={cx('input_frame')}>
            <input id="formPhone" type="tel" name="formPhone" value={this.state.contactPhoneNum} onChange={this._handleChangePhone} required/>
              <div className={cx('place_holder')}>
                Phone Number
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>

            <div className={cx('input_frame')}>
              <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this._handleChangeEmail} required/>
              <div className={cx('place_holder')}>
                E-mail
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>

            <div className={cx('input_frame')}>
              <textarea id="formMsg" name="formMsg" rows="6" cols="40" placeholder="문의내용을 입력해 주세요." value={this.state.contactMessage} onChange={this._handleChangeMsg} required></textarea>
              {/* <span><button>작성 완료</button></span> */}
              <input type="submit" value="문의 하기" className={cx('btn_submit')} id="btn-submit" />
            </div>
                
            
          </form>
        
      </div>
    )
  }
}

export default Contact;