import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from '@pages/Login';
import Proctor from '@components/templates/Proctor';
import Monitoring from './Monitoring';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path={['/', '/login']} exact component={Login} />
      <Route path="/proctor" component={Proctor} />
      <Route path="/monitoring/exam/:id/" component={Monitoring} />
    </BrowserRouter>
  );
};

export default Routes;
