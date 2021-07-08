import React, { FC, ReactElement } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import publicRoutes from '../../../routes/CoffeeHouse';

const CoffeeHousePublicLayout:FC = ():ReactElement => {
  return (
    <Layout>
      <Router
        basename="/coffee-house"
      >
        <Switch>
          {
            publicRoutes.map((route) => {
              const Component = route.component;
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  render={() => <Component />}
                />
              );
            })
          }
          <Redirect to="/login" />
        </Switch>
      </Router>
    </Layout>
  );
};

export default CoffeeHousePublicLayout;
