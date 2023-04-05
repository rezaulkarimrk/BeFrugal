import React from 'react';

import Offer from './offer';
import offerData from '../../data/offferData';
import './banner.css'
import bannerPhoto from '../../images/header-start-page.png';
import Access from '../access/access';
import Form from '../header/form';
import { BsQuestionCircle } from 'react-icons/bs';



function banner(){
  return (
    <div className='banner-bg' >
        <div className='container'  >
            <div className='row'>
                <div className='col-md-6'>
                    <h2 className='offer-main-title' >Get up to 40% Cash Back <br/> at 5000+ Stores</h2>
                    <div className='all-offer' >
                        {
                            offerData.map((offer) => <Offer data ={offer} key={offer.sl} /> )
                        }
                    </div>
                </div>
                <div className='col-md-6' >
                    <div className='bannar-join' >
                        <div className='title' >
                            <h3>Join for Free & Get a <span>$10 Bonus</span> </h3>
                        </div>
                        <div className='banner-auth-form' >
                            <Form />
                        </div>
                        <div className='or' >
                            <span>or</span>
                        </div>
                        
                        <div className='banner-auth' >
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
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default banner