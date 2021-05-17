import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Boards } from '../features/Dashboard';
import { Board } from '../features/Board';
import { Task } from '../features/Task';
import NavHeader from '../features/Dashboard/Header';

export default () => {
  return (
    <Router>
      <NavHeader />
      <Switch>
        <Route exact path='/' component={Boards} />
        <Route exact path='/boards/:id' component={Board} />
        <Route exact path='/boards' component={Boards} />
        <Route exact path='/tasks/:id' component={Task} />
      </Switch>
    </Router>
  );
};
