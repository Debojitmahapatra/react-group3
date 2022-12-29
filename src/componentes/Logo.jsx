import React from 'react'

function Logo(props) {
  return (
    <div className='b-box'>
    <div className='b-img'>
        <img src={props.image} alt=''/>
      </div>
      <div className='b-text'>
        <h2>{props.title}</h2>
        <p>CONTACT</p>
      </div>
    </div>
  )
}

export default Logo
