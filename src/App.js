import React from 'react';
import './App.css';
import Home from './Components/Home.js';
import Links from './Components/Links.js';
import Header from './Components/Header.js';
import Portfolio from './Components/Portfolio.js';
import Contact from './Components/Contact.js';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function ContactButton(){
  return (
    <Link className="Contact" to={'/contact'}>
      <button className = "Contact">
        Contact
      </ button>
    </Link>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     position: 'fixed',
//     top: '3%',
//     right : '-1%',
    // background-color: PaleVioletRed;
    // border-radius: 4px;
    // font-size: 15px;
    // padding: 7px 30px 7px 12px;

  //   }
  // })

function App() {
  return (
    <Router>
      <div className="App">
        <title>Jean Suh</title>
        <Layout />
        <Routes>
          <Route path ="/" element ={<Home />}>
            <Route index element={<Home />}/>
          </Route>
          <Route path = "/portfolio" element = {<Portfolio />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}



function Layout(){
  return(
    <>
      <Header />
      <ContactButton />
      <Links />
    </>
  )
}

export default App;
