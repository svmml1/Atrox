import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import background from './images/lolbackground.jpg'
import { Header } from './components/Header'
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <div className="App">
          <Header items={['Characters']} />
          <img src={background} className="background-image" alt="background" />

        </div>
        <Route exact path="/" component={Home} />
      </main>
    </Router>

  );
}

export default App;
