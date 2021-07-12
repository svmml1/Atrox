import React from 'react';
import logo from './logo.svg';
import background from './images/lolbackground.jpg'
import  {Header}  from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header  items={['Characters']}/>
        <img src={background} className="background-image" alt="background" />
        
    </div>
  );
}

export default App;
