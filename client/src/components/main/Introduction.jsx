import React from 'react'
import About from './About';
import Team from './Team';

export default function Introduction() {
  return (
    <>
      <div className="backdrop-wrapper">
        <div class="backdrop">
          <p class="text lighten"> THE TEAM </p>
        </div>
      </div>
     
      <About />
      <Team />
    </>

  )
}