import React from 'react'
import './NewsLetter.css'
import { useState } from 'react'

export const NewsLetter = () => {
  const [formData,setFormData] = useState({
    email:""
  })
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const Email = () =>{
     alert(" We will keep you Up tp date ")
     window.location.replace('/cart')
  }
  return (
    <div className='newsletter'> 
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input name='email' onChange={changeHandler} type="email" placeholder='Your Email id' />
            <button  onClick={()=>Email()}>Subscribe</button>
        </div>
    </div>
  )
}
