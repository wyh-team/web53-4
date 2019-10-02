import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';


import Banner from './components/banner';
import Teacher from './components/teacher';
import News from './components/news';
import Index from './components/index-m';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/' component = {Index} />
        <Route path='/banner'  component = {Banner} /> 
        <Route path='/teacher' component = {Teacher} />
        <Route path='/news' component = {News} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
