import React from 'react';
import { Home, Contacts } from 'components/pages';
import { Footer, Header, Menu } from 'components/widgets';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <div style={{ paddingLeft: '50px' }}>
              <Header />
              <Menu />
              <Home />
              <Footer />
            </div>
          )}
        />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
}

App.displayName = 'App';
