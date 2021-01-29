import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import EpisodeMain from './components/EpisodeMain';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div className="app">
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
