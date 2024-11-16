import React from 'react'
import './About.css'

import profile from '../../assets/img2.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="title">
            <h1>About Me</h1>
          
        </div>
        <div className="sections">
            <div className="left">
                <img src={profile} alt="" />
            </div>
            
            <div className="right">
                <div className="para">
                <br /><br /><br /><br /><br /><br />
                    <p>I am a passionate Full Stack Developer with a strong foundation in software engineering, having studied 
                        at the National Institute of Business Management (NIBM). My expertise spans both front-end and back-end technologies,
                         allowing me to create seamless and efficient web applications. I thrive on solving complex problems and continuously seek to enhance my skills through hands-on experience and learning. With a keen eye for detail and a commitment to delivering high-quality work, 
                        I am dedicated to building innovative solutions that meet user needs and drive business success.</p>
                    <br /><br />
                </div>
               
            </div>
        </div>
      
    </div>
  )
}

export default About
