import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content.js';
import Links from './Links.js'

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
    <div className="App">
    <title>Jean Suh</title>
      <header className="App-header">
        <div className ="App-header-left">
          <div classNamte = "App-header-name">Jean Suh</div>
          <div className= "App-header-subtext">Software Engineer</div>
        </div>
        <ContactButton />
      </header>
      <Links />
      <Content />
    </div>
  );
}


export default App;
