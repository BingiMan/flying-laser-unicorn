import React from 'react'
import './style.css'
import Introduction from './Introduction'

export default function Home() {
  return (
    <section>

      <div>
        <h1>HOME COMPONENT! YAY!</h1>
        <div className='header-img'>
          <img className='intro-image' src="https://i.imgur.com/lD9dGJ9.jpg" alt="Panda and bamboo" />
        </div>
        <Introduction />
      </div>
    </section>
  )
}