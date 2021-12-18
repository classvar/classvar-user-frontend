import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from '@pages/Login';
import Proctor from '@components/templates/Proctor';
import Monitoring from './Monitoring';
import Course from '@pages/Course';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path={['/', '/login']} exact component={Login} />
      <Route path="/course" exact component={Course} />
      <Route path="/course/:id" component={Proctor} />
      <Route path="/monitoring/exam/:id/" component={Monitoring} />
    </BrowserRouter>
  );
};

export default Routes;
