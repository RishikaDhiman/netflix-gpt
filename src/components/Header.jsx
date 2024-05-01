import React from 'react';
import Netflix_Logo_PMS from '../Netflix_Logo_PMS.png';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utlis/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut=()=>{
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className='header'>
      <img src={Netflix_Logo_PMS} style={{width:155}}/>
      {user!=null && <button onClick={()=>handleSignOut()}>Sign out</button>}
    </div>
  )
}

export default Header
