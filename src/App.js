import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content.js';
import Links from './Links.js';
import Header from './Header.js';
import Portfolio from './Portfolio.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function ContactButton(){
  function handleClick(){
    alert('contact!');
  }
  return (
    <button className = "Contact" onClick = {handleClick}>
      Contact
    </ button>
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
          <Route path = "/portfolio" element = {<Portfolio />}>
            <Route index element = {<PortfolioLayout/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function PortfolioLayout(){
  return(
    <Portfolio />
  )
}

function Home(){
  return(
    <Content />
  )
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
