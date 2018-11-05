import React from 'react';
import { Catalog, /* Order, */ Cart } from 'components/pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as themes from 'themes';
import store from 'store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={themes.default}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Catalog} />
            <Route path="/cart" component={Cart} />
            {/* under construction <Route path="/order" component={Order} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

App.displayName = displayName;
