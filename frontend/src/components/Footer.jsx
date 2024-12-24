import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='banner'>
        <div className='title'>
          <h1>KING's</h1>
          <p>Events and Wedding</p>
        </div>
        <div className='tag'>
          <label>News Letter</label>
        </div>
        <div>
        <input type='text' placeholder='E-mail'/>
        <button>Subscribe</button>
        </div>
        <p>Sign up with your mail address to receive news and updates!</p>
      </div>
    </footer>
  )
}

export default Footer
