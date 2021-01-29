import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EpisodeMain from './components/EpisodeMain';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <HomePage/>}/>
          <Route exact path="/seasons" render={() => <EpisodeMain/>}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
