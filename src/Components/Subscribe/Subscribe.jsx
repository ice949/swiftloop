import React from 'react';
import './Subscribe.css';

const Subscribe = ({email, setEmail, handleSubscribe, btnTxt}) => {
  return (
    <form className="Subscribe" onSubmit={(e) => {handleSubscribe(e)}}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">{btnTxt}</button>
    </form>
  )
}

export default Subscribe