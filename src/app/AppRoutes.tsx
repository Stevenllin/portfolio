import React from 'react';
import { ROUTES } from '../app/core/router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LazySpinner from './common/component/Spinner/LazySpinner';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <Switch>
        <Route
          path={ROUTES.FEATURES}
          component={React.lazy(() => import('./features/Features'))}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;
