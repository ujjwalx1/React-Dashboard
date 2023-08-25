import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
function App() {
  return (
    <div className="app">
     <div className="custom-topology"></div>
      <Sidebar />
      <Footer/>
    </div>
  );
}

export default App;
