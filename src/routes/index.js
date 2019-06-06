import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Browse} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
