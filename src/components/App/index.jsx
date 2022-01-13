import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Wrapper } from './styled';
import Welcome from 'components/Welcome';
import LeaderBoard from 'components/LeaderBoard';
import NewGame from 'components/NewGame';
import Game from 'components/Game';
import ErrorBoundary from 'common/ErrorBoundary';

const customHistory = createBrowserHistory();

function App() {
  return <Wrapper>
    <ErrorBoundary>
      <Router history={ customHistory }>
        <Switch>
          <Route path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route path="/game/new">
            <NewGame />
          </Route>
          <Route path="/game/play">
            <Game />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  </Wrapper>;
}

export default App;
