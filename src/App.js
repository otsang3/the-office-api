import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import mc from './images/digital-mc.png';
import dmpc from './images/dmpc2.jpeg';
import EpisodeList from './components/EpisodeList';
import EpisodeMain from './components/EpisodeMain';
import HomePage from './components/HomePage';
import logo from './images/logo.png';
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>
      <div className="app">
        <div className="img-banner">
          <div className="banner-col">
            <img className="banner-img1" src={dmpc} alt="dunder-mifflin"/>
          </div>
          <div className="banner-col">
            <img className="banner-img2" src={mc} alt="michaels-cott"/>
          </div>
          <div className="banner-col">
            <img className="banner-img3" src={logo} alt="the-office-logo"/>
          </div>
        </div>
        
        <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <HomePage/>}/>
          <Route exact path="/seasons" render={() => <EpisodeMain/>}/>
          <Route exact path="/seasons/:name" render={(id) => <EpisodeList id={id}/>}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
