import React, {useState} from 'react';
import { signUp } from '../../API/apiCalls';
import './Hero.css';
import img from '../../Assets/loop_fig.svg';
import Subscribe from '../Subscribe/Subscribe';

const Hero = ({email, setEmail, error, handleSubscribe}) => {
    
  return (
    <section className="Hero">
      <div className="content1">
        <h1>Tired of Battling team Scheduling Nightmares?</h1>
        <p>Experience Instant Feedback and Effortless Coordination with SwiftLoop</p>
        <Subscribe email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} btnTxt="Get Started"/>
        {error && <p className='error'>{error}</p>}
        <p>Note. We do not collect your Data</p>
      </div>
      <div className="image">
        <img src={img} alt="hero" />
      </div>
    </section>
  )
}

export default Hero