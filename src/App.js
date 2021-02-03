import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import mc from './images/digital-mc.png';
import dmpc from './images/dmpc2.jpeg';
import EpisodeList from './components/EpisodeList';
import HomePage from './components/HomePage';
import logo from './images/logo.png';
import NavBar from './components/NavBar';
import QuotesPage from './components/QuotesPage';



function App() {
  return (
    <Router>
      <div>
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
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <HomePage/>}/>
            <Route exact path="/seasons/:name" render={(id) => <EpisodeList id={id}/>}/>
            <Route exact path="/quotes" render={() => <QuotesPage/>}/>
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
