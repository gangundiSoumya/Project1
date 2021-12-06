//import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import logo from './homepage-image.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src={logo}  alt="logo" />
        <p>
          HYDERABAD LOCAL PROFESSIONAL PACKERS
        </p>
      
    </div>
  );
}

export default App;
