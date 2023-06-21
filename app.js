import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainListPage from './pages/TrainListPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainListPage} />
        <Route path="/train/:id" component={SingleTrainPage} />
      </Switch>
    </Router>
  );
}

export default App;