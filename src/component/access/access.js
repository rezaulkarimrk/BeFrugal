import React from 'react'

import { FcGoogle} from 'react-icons/fc';
import { ImFacebook} from 'react-icons/im';
import { AiFillApple } from 'react-icons/ai';

import './access.css'

function access() {
  return (
    <div className='' >
        <button className='login-all-btn' >
            <div className='icon  '>
                <span className='login-icon' ><FcGoogle/></span>
            </div>
            <span class="loginText">Continue with Google</span>
        </button>
        <button className='login-all-btn' >
            <div className='icon'>
                <span className='login-icon' ><ImFacebook/></span>
            </div>
            <span class="loginText">Continue with Facebook</span>
        </button>
        <button className='login-all-btn' >
            <div className='icon'>
                <span className='login-icon' ><AiFillApple/></span>
            </div>
            <span class="loginText">Continue with Apple</span>
        </button>

    </div>
    
  )
}

export default access