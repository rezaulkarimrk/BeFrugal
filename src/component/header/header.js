import React from 'react';

import Access from '../access/access';
import Form from './form';
import Logo from '../../images/logo-lg.png';
import SubLogo from '../../images/befrugal-text-logo.png';
import "./header.css";
import { BsQuestionCircle } from 'react-icons/bs';



const header = () => {
  
  return (
    <div className='container' >
      <div className='header'>
        <div className='main-logo' >
          <img src={Logo} alt='logo' />
        </div>
        <div className='auth' >
          <div className='login container'>
            <button type="button" class="btn login-btn " data-bs-toggle="modal" data-bs-target="#login" data-bs-whatever="">Login</button>
            <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="login-title">
                    <h1 id="exampleModalLabel">Welcome BeFrugal Members</h1>
                  </div>
                  <div class="modal-body">
                    <Form />
                  </div>
                  <div className='or'>
                    or
                  </div>
                  <div className='access ' >
                    <Access />
                  </div>
                  <div className='login-footer' >
                      <span>Not a member?</span>
                      <a href='#' data-bs-toggle="modal" data-bs-target="#join" > Join Now</a>
                  </div>
                  <div className='header-closs' >
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='join'>
            <button type="button" class="join-btn universal-btn" data-bs-toggle="modal" data-bs-target="#join" >Join Now</button>
            <div class="modal fade" id="join" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div className='have-account'>
                    <span>Already a Member? </span>
                    <a href='#' data-bs-toggle="modal" data-bs-target="#login" >Log in here</a>
                  </div>
                  <div class="login-title">
                    <h1 className='join-title' id="exampleModalLabel">Join 
                    <img className='sub-logo' src={SubLogo} alt='logo' /> 
                    &amp; Get $10!</h1>
                  </div>
                  <div>
                    <p className='join-paragrap' >Earn up to 40% Cash Back at 5000+ top stores</p>
                  </div>
                  
                  <div class="modal-body">
                    <Form />
                  </div>
                  <div className='or'>
                    or
                  </div>
                  <div className='access ' >
                    <Access />
                  </div>
                  <div className='join-footer' >
                    <div className='footer-check-box' >
                      <input type='checkbox' checked />
                      <span>Receive exclusive coupons and deals newsletter</span>
                    </div>
                    
                    <div className='condtion' >
                      <span>By joining, you agree to the BeFrugal </span>
                      <a href='#' >Terms</a>
                      <span> &amp; </span>
                      <a href='#' >Privacy Policy .</a>
                      <div>
                      <span className='bonus-term' >* $10 Bonus Terms  <BsQuestionCircle /></span>
                      
                      </div>
                    </div>
                  </div>
                  <div className='header-closs' >
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default header;