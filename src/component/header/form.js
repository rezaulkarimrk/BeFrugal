import React from 'react'

function form() {
  return (
    <form className='login-form' >
        <div class="mb-1">
          <input type="text" autoFocus class="form-control login-input " id="recipient-name" placeholder='Enter your email address' />
        </div>
        <div class="mb-1">
          <button type='submit' class="form-control submit-btn universal-btn" >Login with email</button>
        </div>
    </form>
  )
}

export default form