import React from 'react';

export default function Team() {
  return (
    <>
      <div className='intro-section2'> 
    <div className='about-team-intro'>
    <h2>Meet the team</h2>
  </div>

  <div className='team-intro'>

    <div className='single-team'>
      <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />
      <a href="https://github.com/fallwall">
        <button className='team-button'>Tibby</button>
      </a>
    </div>

    <div className='single-team'>
      <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />
      <a href="https://github.com/BingiMan">
        <button className='team-button'>Luis</button>
      </a>
    </div>

    <div className='single-team'>
      <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />
      <a href="https://github.com/Montyrivers">
        <button className='team-button'>Chris</button>
      </a>
    </div>

    <div className='single-team'>
      <img className='single-team-img' src='https://i.imgur.com/SAypr2F.jpg' alt='team-pandas' />
      <a href="https://github.com/jascarpentier">
        <button className='team-button'>Jasmine</button>
      </a>
    </div>

        </div>
        </div>
      </>
  )
}