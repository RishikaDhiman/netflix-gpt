import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utlis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utlis/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [signIn, setSignIn] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleClick=()=>{
    setSignIn(!signIn);
  }

  const handleButtonClicked=()=>{
    // validate data
    const res = checkValidData(email.current.value,password.current.value);
    // console.log(res);
    // console.log(email.current.value,password.current.value);
    setErrorMessage(res);

    // email or password is not valid.
    if(errorMessage) return;

    if(!signIn){
      // sign up logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("signed up")
        navigate("/browse")  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errormsg = error.message;
        console.log(errormsg);
        setErrorMessage(errormsg);
      });

    }
    else{
      // sign in logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("signed in")
        navigate("/browse")  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errormsg = error.message;
        console.log(errormsg);
        setErrorMessage(errormsg);
      });
    }

  }

  return (
    <div className='login_page'>
      <Header/>
        <form onSubmit={(e)=>e.preventDefault()} className='login-box'>
          <h1>{signIn?"Sign In":"Sign Up"}</h1>
          {!signIn && <div className='login-small-box'>
            <input type="text" placeholder='Enter your full name'></input>
          </div>}
          <div className='login-small-box'>
            <input type="email" placeholder='Enter your email address' ref={email}></input>
          </div>
          <div className='login-small-box'>
            <input type="password" placeholder='Enter your password' ref={password}></input>
          </div>
          {errorMessage!=null && <p style={{color: "rgb(165, 4, 4)"}}>{errorMessage}</p>}
          <button onClick={handleButtonClicked}>{signIn?"Sign In":"Sign Up"}</button>
          <p onClick={handleClick} style={{cursor:'pointer'}}>{signIn?"New to Netflix ? Sign up now":"Already have a account ? Sign in now"}</p>
        </form>
    </div>
  ) 
}

export default Login
