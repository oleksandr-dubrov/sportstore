import React from 'react';
import { Catalog, /* Order, */ Cart } from 'components/pages';
import { DefaultLayout, OrderLayout } from 'components/layouts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store';
import { Provider } from 'react-redux';

const displayName = 'App';

export default function App() {
  return (
    <div className="Catalog" style={{ display: 'inline' }}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <DefaultLayout>
                  <Catalog {...props} />
                </DefaultLayout>
              )}
            />
            <Route
              path="/cart"
              render={props => (
                <OrderLayout>
                  <Cart {...props} />
                </OrderLayout>
              )}
            />
            {/* under construction <Route path="/order" component={Order} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

App.displayName = displayName;
