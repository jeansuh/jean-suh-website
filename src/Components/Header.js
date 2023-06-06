import React from 'react';
import './Home.css';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header(){

	return(
		<header className="App-header">
        	<div className ="App-header-left">
          		<Link classNamte = "App-header-name" to = "/" style = {{ textDecoration: 'none', color: 'white' }}>Jean Suh</Link>
          		<div className= "App-header-subtext">Software Engineer</div>
        	</div>
      </header>
    )
}

export default Header;