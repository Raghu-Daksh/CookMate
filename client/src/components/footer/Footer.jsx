import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-row-1'>
            <div className='footer-logo'>
               <h4> CookMate</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, earum!</p>
            </div>
            <ul className='footer-list'>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/'>Recipes</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/contact' >Contact</Link></li>
            </ul>
        </div>
        <hr />
        <div className='footer-row-2'>
            <div className='footer-text'>© 2020 Flowbase. Powered by <span style={{color:'orange'}}>Webflow</span> </div>
            <div className='footer-social'>
        
                <div className='footer-icons'>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
