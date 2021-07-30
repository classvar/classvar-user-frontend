import React from 'react';
import { Route } from 'react-router-dom';
import Login from '@pages/Login';

const App: React.FC = () => {
  return (
    <>
      <Route path="/Login" component={Login} />
    </>
  );
};

export default App;
