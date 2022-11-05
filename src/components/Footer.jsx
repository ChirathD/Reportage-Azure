import React from 'react'
import Logo from './logo-5.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='container'>
      <div className='info'>
        <img src={Logo} alt="" style={{width: '80px'}}/>
        <Link className='link' to="/privacy-policy">Privacy Policy</Link>
        <Link className='link' to="/?cookie-policy">Cookie Policy</Link>
        <p className='rights'>© 2022 All rights reserved by TheReportage Corp.</p>
      </div>
    </footer>
  )
}

export default Footer