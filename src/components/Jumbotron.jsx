import '../scss/Jumbotron.scss';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';

export default function Jumbotron({ mainContentRef }) {
  const scrollToMainContent = () => mainContentRef.current.scrollIntoView({ behavior: 'smooth' })    
  return (
	  	<div className="intro">
		  	<div className="content">
		  	  <span className="logo">a</span>
		      <h1 className="header">Anurag Papolu</h1>
		      <p className="center">Full-Stack Developer</p>
          <a href="https://github.com/anuragpapolu" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/anuragpapolu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <button className="btn-down" onClick={ scrollToMainContent }>
            <FaChevronDown/>
          </button>
		    </div>
		  </div>
  );
}
