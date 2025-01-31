import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Cms from './routes/i-index.js';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Cms} />
      </Switch>
    </Router>
  );
}



export default RouterConfig;
