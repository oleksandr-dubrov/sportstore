import React from 'react';
import { Products } from 'components/widgets';
import { DefaultLayout } from 'components/layouts';

const displayName = 'Catalog';

function Catalog() {
  return (
    <DefaultLayout name="Catalog">
      <Products />
    </DefaultLayout>
  );
}

Catalog.displayName = displayName;

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
