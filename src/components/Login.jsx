import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [signIn, setSignIn] = useState(true);

  const handleClick=()=>{
    setSignIn(!signIn);
  }

  return (
    <div className='login_page'>
      <Header/>
        <form className='login-box'>
          <h1>{signIn?"Sign In":"Sign Up"}</h1>
          {!signIn && <div className='login-small-box'>
            {/* <label>Full Name : </label> */}
            <input type="text" placeholder='Enter your full name'></input>
          </div>}
          <div className='login-small-box'>
            {/* <label>Email : </label> */}
            <input type="text" placeholder='Enter your email address'></input>
          </div>
          <div className='login-small-box'>
            {/* <label>Password : </label> */}
            <input type="text" placeholder='Enter your password'></input>
          </div>
          <button>{signIn?"Sign In":"Sign Up"}</button>
          <p onClick={handleClick} style={{cursor:'pointer'}}>{signIn?"New to Netflix ? Sign Up":"Already have a account ? Sign In"}</p>
        </form>
    </div>
  ) 
}

export default Login
