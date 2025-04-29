import React from 'react'
import './subscribeCard.css'
import img from '../../../assets/subscribe4.jpeg'

const SubscribeCard = () => {
  return (
    <div className='subscribe-card'>
        <img src={img} alt="subscribe" />
        <div className='subscribe-card-content'>
            <h1>Deliciousness to your inbox</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatibus assumenda sapiente earum rem maxime voluptate doloribus, vel quia error.</p>
            <form className="subscribe-card-btn">
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default SubscribeCard
