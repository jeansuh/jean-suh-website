import React from 'react';
import './Portfolio.css';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IGN from '../img/IGN.png';
import SF from '../img/SafetyFirst.png';
import WH from '../img/WildHearts.png';
import CA from '../img/Campus.png';
import GH from '../img/github-mark-white.svg';
import LINK from '../img/popup-link-icon.svg';

function Portfolio() {
	
	return(
		<div className = "portfolio-wrapper">
			<div className = "portfolio">
				<div className="portfolio-item">
					<a className="link" href = "https://jeansuh.github.io/IGN-mock-website/" >
						<img className="thumbnail" src={IGN} />
					</a> 
					<div className="portfolio-description">
						<div className="portfolio-description-content pink-transition">
							<div className = "project-title">IGN mock website</div>
							<div className = "tech-stack">Javascript / HTML / CSS</div>
							<div className = "hidden-text">Hi this is a project</div>
						</div>
						<div className = "project-links">
							<Link to="https://github.com/jeansuh/IGN-mock-website/tree/main/IGN-mock-website">
								<img className="link-logo-gh pink-transition" src={GH} />
							</Link>
							<Link to="https://jeansuh.github.io/IGN-mock-website/ ">
								<img className="link-logo-popup pink-transition" src={LINK} />
							</Link>
						</div>
					</div>
				</div>

				<div className="portfolio-item">
					<a className="link" href = "https://safetyfirstnycdev.herokuapp.com/"> 
						<img className="thumbnail" src={SF} />
					</a>
					<div className="portfolio-description">
						<div className="portfolio-description-content pink-transition">
							<div className = "project-title">SafetyFirst</div>
							<div className = "tech-stack">Django / Heroku / Javascript / HTML / CSS </div>
						</div>
						<div className = "project-links">
							<Link to="https://github.com/csci-499-fa22/team-4">
								<img className="link-logo-gh pink-transition" src={GH} />
							</Link>
							<Link to="https://safetyfirstnycdev.herokuapp.com/">
								<img className="link-logo-popup pink-transition" src={LINK} />
							</Link>
						</div>
					</div>
				</div>

				<div className="portfolio-item">
					<a className="link" href = "https://safetyfirstnycdev.herokuapp.com/"> 
						<img className="thumbnail" src={WH} />
					</a>
					<div className="portfolio-description">
						<div className="portfolio-description-content pink-transition">
							<div className = "project-title">Wild Hearts API</div>
							<div className = "tech-stack">C# / ASP.NET / MySQL</div>
						</div>
						<div className = "project-links">
							<Link to="https://github.com/jeansuh/wild-hearts-api">
								<img className="link-logo-gh pink-transition" src={GH} />
							</Link>
						</div>
					</div>
				</div>


				<div className="portfolio-item">
					<a className="link" href = "https://safetyfirstnycdev.herokuapp.com/"> 
						<img className="thumbnail" src={CA} />
					</a>
					<div className="portfolio-description">
						<div className="portfolio-description-content pink-transition">
							<div className = "project-title">Campus Management System</div>
							<div className = "tech-stack">React.js / Javscript / HTML / CSS / PostgreSQL / Express / Node.js</div>
						</div>
						<div className = "project-links">
							<Link to="https://github.com/jeansuh/final-project-client">
								<img className="link-logo-gh pink-transition" src={GH} />
							</Link>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Portfolio;