import React from "react";
import '../scss/Intro.scss';
import { BsChevronCompactDown } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Display introduction and important links 
export default function Intro({ mainContentRef }) {
  const scrollToMainContent = () => mainContentRef.current.scrollIntoView({ behavior: 'smooth' })    
  return (
	  	<div className="intro">
		  	<div className="content">
          <img src="logo.png" className="logo" />
		      <h1 className="header">Anurag Papolu</h1>
		      <p className="center">Full-Stack Developer</p>
          <button className="btn-down" onClick={ scrollToMainContent }>
            <BsChevronCompactDown/>
          </button>
		    </div>
		  </div>
  );
}
