import React from 'react';
import './Home.css';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header(){

	return(
		<header className="App-header">
        	<div className ="App-header-left">
          		<Link to = "/" style = {{ textDecoration: 'none', color: 'white' }}>
          			<div classNamte = "App-header-name" to = "/" >Jean Suh</div>
          			<div className= "App-header-subtext">Software Engineer</div>
          		</Link>
        	</div>
      </header>
    )
}

export default Header;