import React from 'react'
import {AiFillGithub, AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 OJB Headphones All rights reserved</p>
      <p className="icons">
        <a href="https://github.com/ojongfalon"><AiFillGithub /></a>
        
        <a className='email' href="mailto:ojongfalon@gmail.com"><AiOutlineMail/></a>
      </p>
    </div>
  )
}

export default Footer