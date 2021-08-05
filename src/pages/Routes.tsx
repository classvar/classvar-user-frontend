import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from '@pages/Login';
import Proctor from '@components/templates/Proctor';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path={['/', '/login']} exact component={Login} />
      <Route path="/proctor" component={Proctor} />
    </BrowserRouter>
  );
};

export default Routes;
