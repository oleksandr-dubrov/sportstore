import React from 'react';
import { Products } from 'components/widgets';

const displayName = 'Catalog';

function Catalog() {
  return <Products />;
}

Catalog.displayName = displayName;

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
