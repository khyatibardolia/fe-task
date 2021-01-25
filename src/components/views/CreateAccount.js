import React, { useState } from 'react';
import './createAccount.scss';

export const CreateAccount = () => {
  const [togglePassword, setPasswordToggler] = useState(false);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setFormValidity] = useState(false);

  const handlePasswordToggle = () => {
    const element = document.getElementById('password');
    if (element.type === 'password') {
      element.type = 'text';
    } else {
      element.type = 'password';
    }
    setPasswordToggler(!togglePassword);
  };

  const handleChange = (e, field) => {
    fields[field] = e.target.value;
    setFields(fields);
    validateFields();
  };

  const validateFields = () => {
    let errors = {};
    setFormValidity(true);
    console.log('fields[]', fields['usertype']);
    if (!fields['name']) {
      setFormValidity(false);
      errors['name'] = 'Please enter your name.';
    }
    if (!fields['email'] ||
      !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fields['email']))) {
      setFormValidity(false);
      errors['email'] = 'Please enter a valid email address.';
    }
    if (!fields['usertype']) {
      setFormValidity(false);
      errors['usertype'] = 'Please select your user type.';
    }
    if (!fields['password']) {
      setFormValidity(false);
      errors['password'] = 'Please enter your password.';
    } else if (fields['password'].length < 8) {
      setFormValidity(false);
      errors['password'] = 'Minimum 8 characters.';
    }
    setErrors(errors);
    return isFormValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateFields) {
      alert('Form submitted');
    }
    document.getElementById('userForm').reset();
    const select_box = document.getElementById("selectbox");
    select_box.selectedIndex = 0;
  };

  return (<div className={'create-account-panel w-100 h-100 p-5'}>
    <div className={'main-div mx-5'}>
      <div className={'section-title'}>Let’s set up your account</div>
      <div className={'sub-text py-4'}>
        <span className={'sub-text-span'}>Already have a account?</span>
        <a href={'#signin'}> Sign in</a>
      </div>
      <div className={'user-form'}>
        <form id={'userForm'} onSubmit={handleFormSubmit}>
          <div className={'pb-3 field'}>
            <input name='name' onChange={(e, name) => {handleChange(e, 'name');}}
                   className={`${errors['name'] ? 'show-error' : ''} px-3 py-2 w-100`} type={'text'}
                   required={true}/>
            <label
              className={`floating-label px-3 py-2 ${errors['name'] ? 'error-text' : ''}`}>
              <span>Your name</span>
            </label>
            {errors['name'] ? <span className={'error-text'}>{errors['name']}</span> : null}
          </div>
          <div className={'pb-3 field'}>
            <input name='email' onChange={(e, email) => {handleChange(e, 'email');}}
                   className={`px-3 py-2 w-100 ${errors['email'] ? 'show-error' : ''}`}
                   type={'text'} required={true}/>
            <label className={`floating-label px-3 py-2 ${errors['email'] ? 'error-text' : ''}`}>
              <span>Email address</span>
            </label>
            {errors['email'] ? <span className={'text-danger'}>{errors['email']}</span> : null}
          </div>
          <div className={'pb-3 field option-field'}>
            <select id='selectbox' name='usertype'
                    className={`px-3 py-2 w-100 ${errors['usertype'] ? 'show-error' : ''}`}
                    onChange={(e, usertype) => {handleChange(e, 'usertype');}}>
              <option value="" disabled selected hidden>I would describe my user type as
              </option>
              <option>Developer</option>
              <option>Designer</option>
            </select>
            {errors['usertype'] ? <span
              className={'text-danger'}>{errors['usertype']}</span> : null}
          </div>
          <div className={'pb-3 field'}>
            <div className={'d-flex'}>
              <input name='password' onChange={(e, password) => {handleChange(e, 'password');}}
                     className={`px-3 py-2 w-100 ${errors['password'] ? 'show-error' : ''}`}
                     id="password" type={'password'}
                     required={true}/>
              <i className={`fa fa-${togglePassword ? 'eye-slash' : 'eye'} eye-icon`}
                 onClick={handlePasswordToggle}/>
              <label
                className={`floating-label px-3 py-2 ${errors['password'] ? 'error-text' : ''}`}>
                <span>Password</span>
              </label>
            </div>
            {errors['password'] ? <span
              className={'text-danger'}>{errors['password']}</span> : null}
          </div>
          <div className={'pb-3 submit-btn'}>
            <button disabled={!isFormValid} onClick={validateFields}
                    className={`px-3 py-2 w-100 ${!isFormValid ? 'btn-disabled' : 'next-button'}`}
                    type={'submit'}>Next
            </button>
          </div>
        </form>
        <div className={'sub-text py-4'}>
          <span className={'sub-text-span'}>
            By clicking the “Next” button, you agree to creating a free account, and to</span>
          <a href={'#terms'}> Terms <br/>of Service</a><span> and </span>
          <a href={'#policy'}>Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>);
};
