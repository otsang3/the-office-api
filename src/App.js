import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EpisodeMain from './components/EpisodeMain';
import HomePage from './components/HomePage';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomePage/>}/>
          <Route exact path="/episodes" render={() => <EpisodeMain/>}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
