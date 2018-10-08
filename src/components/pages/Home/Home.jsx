import React from 'react';
import { Plates } from 'components/widgets';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Contacts } from 'components/pages';
import { Summary } from 'components/pages';
import store from 'store/store';
import { Provider } from 'react-redux';

const displayName = 'Home';

function Home() {
  return (
    <div className="Home" style={{ display: 'inline' }}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Plates} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/summary" component={Summary} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

Home.displayName = displayName;

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
