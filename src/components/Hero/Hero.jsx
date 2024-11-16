import React, { useEffect, useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/hey.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Resume.pdf'; // Update this path to your resume file

const Hero = () => {
  const phrases = ["I'm Nisura Sahan."];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (displayedText.length < phrases[currentPhraseIndex].length) {
        setDisplayedText((prev) => prev + phrases[currentPhraseIndex][displayedText.length]);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedText('');
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 5000); 
      }
    }, 200); // Typing speed

    return () => clearInterval(typingInterval);
  }, [displayedText, currentPhraseIndex, phrases]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'nisura_sahan.pdf'; // Change this to the desired filename
    link.click();
  };

  return (
    <div id='home' className='Hero'>
      <img src={profile_img} alt="" />
      <h1>{displayedText}</h1>
      <p>Full Stack Developer</p><br />
      <div className="hero-action">
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleResumeDownload}>Download Resume</div>
      </div>
    </div>
  );
}

export default Hero;