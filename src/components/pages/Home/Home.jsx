import React from 'react';
import { Plate } from 'components/widgets';
import { BlockedButton } from 'components/controls';

const devStyle = {
  display: 'inline-block',
  borderColor: 'black',
  border: '1px solid #ccc',
};

const products = {
  products: [
    {
      name: 'product1',
      price: '$1',
      picture: null,
    },
    {
      name: 'product2',
      price: '$2',
      picture: null,
    },
    {
      name: 'product3',
      price: '$3',
      picture: null,
    },
  ],
};

function Home() {
  return (
    <main className="Home" style={devStyle}>
      {products.products.map(product => (
        <Plate product={product} key={product.name} />
      ))}
      <BlockedButton text="Accept" value="button1" />
    </main>
  );
}

Home.displayName = 'Home';

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
