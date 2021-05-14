import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route exact path = '/' component = {LoginPage}/>
          <Route path = '/homePage' component = {HomePage}/>     
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
