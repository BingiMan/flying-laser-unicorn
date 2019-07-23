import React from 'react'

export default function Introduction() {
  return (
    <div className='intro-section'>
      <div className='intro-h1'>
        <h1>About the hungry pandas</h1>
      </div>
      <div className='intro-about'>
        <h4>Feel like you go eat lunch at the same place every single day? <br />
          Out of ideas of where to go and need inspiration? <br />
          Our mission is to help you discover new and delicious places to eat on your lunch break.</h4>
      </div>


      <div className='about-team-intro'>

        <h2>Meet the team</h2>

      </div>



      <div className='team-intro'>

        <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />

        <a href="https://github.com/fallwall">
          <button className='team-button'>Tibby</button>
        </a>

        <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />


        <a href="https://github.com/BingiMan">
          <button className='team-button'>Luis</button>
        </a>

        <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />
        <a href="https://github.com/Montyrivers">
          <button className='team-button'>Chris</button>
        </a>

        <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />

        <a href="https://github.com/jascarpentier">
          <button className='team-button'>Jasmine</button>
        </a>

      </div>
    </div>

  )
}