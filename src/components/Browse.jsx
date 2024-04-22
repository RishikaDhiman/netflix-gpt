import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Browse = () => {

  const user = useSelector(store=>store.user);
  console.log(user);
  return (
    <div className='Browse_page'>
      <Header/>
    </div>
  )
}

export default Browse
