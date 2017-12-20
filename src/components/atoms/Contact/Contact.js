import React from 'react';
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
      contactMessage: '',
      classState:'',
      focusedForm:''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangePhone = this._handleChangePhone.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangeMsg = this._handleChangeMsg.bind(this);
    this._onFocus = this._onFocus.bind(this); 
  }

  _onFocus(e){
    this.setState({
      focusedForm: e.target.id,
    });
    
  }

  // _onBlur(e){
  //   // console.log('remove class : '+ this.state.)
  // }

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
  
  _handleChangeMsg(e) {
    this.setState({
      contactMessage: e.target.value
    });
  }

  _handleSubmit(e) {
    
    e.preventDefault();
    this.setState({
      contactName: this.state.contactName,
      contactPhoneNum: this.state.contactPhoneNum,
      contactEmail: this.state.contactEmail,
      contactMessage: this.state.contactMessage
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
        contactName: this.state.contactName,
        contactPhoneNum: this.state.contactPhoneNum,
        contactEmail: this.state.contactEmail,
        contactMessage: this.state.contactMessage,
        classState: "active"
            });
      console.log('success', data);
    })
    .catch(e => {

      this.setState({
        contactName: this.state.contactName,
        contactPhoneNum: this.state.contactPhoneNum,
        contactEmail: this.state.contactEmail,
        contactMessage: this.state.contactMessage,
        classState: "active"
            });
      console.log('error! : '+e);
    });

  }
  
  render() {
    let checkFocus = this.state.focusedForm;
      
    
    

    console.log('onFocus: '+ this.state.focusedForm);
    return (
      <div className={cx('contact_form')} id="contact">
          <div className={cx('mail_ok',this.state.classState)}>
            <h1>문의 접수 완료!</h1>
            <span>  
              문의 주셔서 감사합니다. <br />
              담당자가 확인 후 빠른 시일 내에<br />
              답변 드리겠습니다. 
            </span>
          </div>
          <form className="form" onSubmit={this._handleSubmit} id="formContact">
            
                
            <div className={cx('input_frame',(checkFocus==="formName")?'focused':'')}>
              <input id="formName" type="text" name="formName" value={this.state.contactName} onChange={this._handleChangeName} onFocus={this._onFocus} required/>
              <div className={cx('place_holder')}>
                Name
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>
              
            <div className={cx('input_frame',(checkFocus==="formPhone")?'focused':'')}>
              <input id="formPhone" type="tel" name="formPhone" value={this.state.contactPhoneNum} onChange={this._handleChangePhone} onFocus={this._onFocus} required/>
                <div className={cx('place_holder')}>
                  Phone Number
                </div>
                <div className={cx('form_border_bottom')}></div>
            </div>

            <div className={cx('input_frame',(checkFocus==="formEmail")?'focused':'')}>
              <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this._handleChangeEmail} onFocus={this._onFocus} required/>
              <div className={cx('place_holder')}>
                E-mail
              </div>
              <div className={cx('form_border_bottom')}></div>
            </div>

            <div className={cx('input_frame',(checkFocus==="formMsg")?'focused':'')}>
              <textarea id="formMsg" name="formMsg" rows="6" cols="40" placeholder="문의내용을 입력해 주세요." value={this.state.contactMessage} onFocus={this._onFocus} onChange={this._handleChangeMsg} required></textarea>
              {/* <span><button>작성 완료</button></span> */}
              <input type="submit" value="문의 하기" className={cx('btn_submit')} id="btn-submit" />
            </div>
                
            
          </form>
        
      </div>
    )
  }
}

export default Contact;