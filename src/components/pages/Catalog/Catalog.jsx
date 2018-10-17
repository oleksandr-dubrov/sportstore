import React from 'react';
import { Products } from 'components/widgets';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store/store';
import { Provider } from 'react-redux';
import Order from '../Order';
import Cart from '../Cart';

const displayName = 'Catalog';

function Catalog() {
  return (
    <div className="Catalog" style={{ display: 'inline' }}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/order" component={Order} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

Catalog.displayName = displayName;

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
