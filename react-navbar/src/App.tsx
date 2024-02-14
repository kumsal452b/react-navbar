import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AdvanceNavbar from './components/AdvanceNavbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <AdvanceNavbar/>
       <Home/>
    </div>
  );
}

export default App;
