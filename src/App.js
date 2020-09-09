import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
     <AboutMe/>
     <Projects/>
     <Technologies/>
    </div>
  );
}

export default App;
