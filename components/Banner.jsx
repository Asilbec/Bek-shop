import React from 'react'
import { urlFor } from '../lib/client';

const Banner = ({information }) => {
  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
            <h2>{information.smalltext}</h2>
            <h1>{information.bigText}</h1>
        </div>
        <div className='hero-button-image-container'>
        <img src={urlFor(information.image)} alt="headphones" className="hero-image" />
        </div>
    </div>
  )
}

export default Banner