import React from 'react';
import './Portfolio.css';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Portfolio() {
	
	return(
		<div className = "portfolio-wrapper">
			<div className = "portfolio">
				under construction<br />
				<a href = "https://jeansuh.github.io/IGN-mock-website/" >IGN mock website</a> <br/>
				<a href = "https://safetyfirstnycdev.herokuapp.com/"> SafetyFirst </a>
			</div>
		</div>
	)
}

export default Portfolio