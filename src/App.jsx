import React from 'react';
import { Home } from 'components/pages';
import { Footer, Header, Menu } from 'components/widgets';

const displayName = 'App';

export default function App() {
  return (
    <main style={{ paddingLeft: '50px' }}>
      <Header />
      <Menu />
      <Home />
      <Footer />
    </main>
  );
}

App.displayName = displayName;
