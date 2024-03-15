import React, { useState } from 'react';
import './Portfolio.css';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IGN from '../img/IGN.png';
import SF from '../img/SafetyFirst.png';
import WH from '../img/WildHearts.png';
import CA from '../img/Campus.png';
import GH from '../img/github-mark-white.svg';
import LINK from '../img/popup-link-icon.svg';
import EC from '../img/makeup-website.png';

const mountedStyle = { animation : "inAnimation .2s ease-in"};
const unmountedStyle = {
	animation: "outAnimation .2s ease-out",
	animationFillMode:"forwards"
}

const slideUp = {
	animation:"slideUp .2s ease-out",
	animationFillMode:"forwards",
}

const slideDown = {
	animation:"slideDown .2s ease-out",
}


function Portfolio() {
	const [isHovered, setIsHovered] = useState(null);

	const handleMouseOver = (e) => {
		switch (e.target.id) {
		case "1":
			setIsHovered(1)
			break
		case "2":
			setIsHovered(2)
			break
		case "3":
			setIsHovered(3)
			break
		case "4":
			setIsHovered(4)
			break
		case "5":
			setIsHovered(5)
			break
		}
	}

	return(
		<div className = "portfolio-wrapper">
			<div className = "portfolio">
				<div className="portfolio-item">
					<a className="link" href = "https://jeansuh.github.io/IGN-mock-website/" >
						<img className="thumbnail" src={IGN} />
					</a> 
					<div className="portfolio-description">
						<div 
						id = "1"
						onMouseEnter={handleMouseOver} onMouseLeave={() => setIsHovered(null)}
						className="portfolio-description-content pink-transition">
							<div className = "portfolio-description-content-top"
								style={isHovered===1 ? slideUp : slideDown}
								>
								<div className = "project-title ">
									IGN mock website
								</div>
								<div className = "tech-stack">
									Javascript / HTML / CSS
								</div>
							</div>
							<div className = "hidden-text" style={isHovered ===1 ? mountedStyle : unmountedStyle}>
								Front-end web-page project built for IGN summer internship. All data is parsed in Javascript from JSON file extracted through the IGN API endpoints.
							</div>
						</div>
						<div className = "project-links">
							<Link to="https://github.com/jeansuh/IGN-mock-website/tree/main/IGN-mock-website">
								<img className="link-logo-gh" src={GH} />
							</Link>
							<Link to="https://jeansuh.github.io/IGN-mock-website/ ">
								<img className="link-logo-popup" src={LINK} />
							</Link>
						</div>
					</div>
				</div>

				<div className="portfolio-item">
					<a className="link" href = "https://safetyfirstnycdev.herokuapp.com/"> 
						<img className="thumbnail" src={SF} />
					</a>
					<div className="portfolio-description">
						<div 
							id = "2"
							onMouseEnter={handleMouseOver} onMouseLeave={() => setIsHovered(null)}
							className="portfolio-description-content pink-transition"
						>
							<div className = "portfolio-description-content-top"
								style={isHovered===2 ? slideUp : slideDown}
								>
								<div className = "project-title">
									SafetyFirst
								</div>
								<div className = "tech-stack">
									Django / Heroku / Javascript / HTML / CSS 
								</div>
							</div>
							<div className = "hidden-text"  style={isHovered ===2 ? mountedStyle : unmountedStyle}>
								Group project in Agile environment where I worked as the sole front-end developer. This website looks up a license number and reports the driver's information.
							</div>
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

						<div 
							id = "3"
							onMouseEnter={handleMouseOver} onMouseLeave={() => setIsHovered(null)}
							className="portfolio-description-content pink-transition"
						>
							<div className = "portfolio-description-content-top"
								style={isHovered===3 ? slideUp : slideDown}
								>
								<div className = "project-title">Wild Hearts API</div>
								<div className = "tech-stack">C# / ASP.NET / MySQL</div>
							</div>
							<div className = "hidden-text"  style={isHovered ===3 ? mountedStyle : unmountedStyle}>
								API server created for EA video game Wild Hearts. The API endpoints allow you to add/edit entries, and give game data for players' convenience.
							</div>
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
						<div 
							id = "4"
							onMouseEnter={handleMouseOver} onMouseLeave={() => setIsHovered(null)}
							className="portfolio-description-content pink-transition"
						>
							<div className = "portfolio-description-content-top"
								style={isHovered===4 ? slideUp : slideDown}
								>
								<div className = "project-title">Campus Management System</div>
								<div className = "tech-stack">React.js / Javscript / HTML / CSS / PostgreSQL / Express / Node.js / Redux</div>
						</div>
							<div className = "hidden-text"  style={isHovered ===4 ? mountedStyle : unmountedStyle}>
								Full-stack PERN project where the back-end creates a server through PostgreSQL and Express, and relays the data to the front-end through Redux. The website manages CUNY campuses and its students.
							</div>
						</div>
						<div className = "project-links">
							<Link to="https://github.com/jeansuh/final-project-client">
								<img className="link-logo-gh pink-transition" src={GH} />
							</Link>
						</div>
					</div>
				</div>

				<div className="portfolio-item">
					<a className="link" href = "https://www.figma.com/file/UFYCDkwG8v6HjTzFfDQQmq/Untitled?type=design&node-id=0%3A1&mode=design&t=0wh3FgI3KvQTIdrj-1"> 
						<img className="thumbnail" src={EC} />
					</a>
					<div className="portfolio-description">
						<div 
							id = "5"
							onMouseEnter={handleMouseOver} onMouseLeave={() => setIsHovered(null)}
							className="portfolio-description-content pink-transition"
						>
							<div className = "portfolio-description-content-top"
								style={isHovered===5 ? slideUp : slideDown}
								>
								<div className = "project-title">
									Makeup E-commerce Website
								</div>
								<div className = "tech-stack">
									Figma 
								</div>
							</div>
							<div className = "hidden-text"  style={isHovered ===5 ? mountedStyle : unmountedStyle}>
								A e-commerce website design for a make-up company. Includes log-in, shopping cart, and check out pages. Design keywords are modern, informative and ease-of-flow. Created on Figma.
							</div>
						</div>
						<div className = "project-links">
							<Link to="https://www.figma.com/file/UFYCDkwG8v6HjTzFfDQQmq/Untitled?type=design&node-id=0%3A1&mode=design&t=0wh3FgI3KvQTIdrj-1">
								<img className="link-logo-gh pink-transition" src={LINK} />
							</Link>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Portfolio;