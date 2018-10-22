import React from 'react';
import { Catalog, /* Order, */ Cart } from 'components/pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store';
import { Provider } from 'react-redux';

const displayName = 'App';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/cart" component={Cart} />
          {/* under construction <Route path="/order" component={Order} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

App.displayName = displayName;
