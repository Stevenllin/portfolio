import React from 'react';
import { ROUTES } from '../app/core/router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LazySpinner from './common/component/Spinner/LazySpinner';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <Switch>
        <Route
          path={ROUTES.HOMEPAGE}
          component={React.lazy(() => import('../app/features/Homepage'))}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;
