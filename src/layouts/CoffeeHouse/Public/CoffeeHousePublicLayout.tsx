import React, { ReactElement } from 'react';
import Layout from '../../Admin/Public/Layout';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import publicRoutes from '../../../routes/CoffeeHouse';

const CoffeeHousePublicLayout:React.FC = ():ReactElement => {
  console.log('CoffeeHousePublicLayout');
  return (
    <Layout>
      <Router
        basename="/coffee-house"
      >
        <Link to="/register">Register</Link>{' '}
        <Link to="/login">Login</Link>
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
