import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from 'components/layout';
import routes from '../../routes';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {Object.values(routes).map((route) => {
            const View = lazy(() => import(`../../views/${route.view}`));

            return (
              <Route
                key={route.path}
                path={route.path}
                element={(
                  <Suspense>
                    <View />
                  </Suspense>
                )}
              />
            );
          })}
          <Route
            path="*"
            element={(
              <Navigate to="/images" replace />
            )}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
