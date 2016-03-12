import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import StartupList from './containers/startup_list';
import StartupNew from './containers/startup_new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StartupList} />
    <Route path="startups/new" component={StartupNew} />
  </Route>
);
