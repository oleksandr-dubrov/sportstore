import React from 'react';
import { Catalog } from 'components/pages';
import Layout from 'components/layouts';

const displayName = 'App';

export default function App() {
  return (
    <Layout name="layout name">
      <Catalog />
    </Layout>
  );
}

App.displayName = displayName;
