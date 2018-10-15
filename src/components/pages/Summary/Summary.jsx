import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "components/controls";
import { Counter } from "components/widgets";

const displayName = "Summary";

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  increaseQuantityHandler: PropTypes.func.isRequired
};

function Summary({ products, increaseQuantityHandler }) {
  return (
    <div style={{ display: "inline-block" }}>
      <h3>Summary</h3>
      {products.length > 0 ? (
        <div>
          <ol>
            {products.map(product => (
              <li key={product.id}>
                {product.name}
                {" - "}
                {product.price}
                {" - "}
                <Counter
                  product={product}
                  increaseQuantityHandler={increaseQuantityHandler}
                />
              </li>
            ))}
          </ol>
          <span>Enter all contact information:</span>
          <Input />
          <Button text="Commit" />
        </div>
      ) : (
        <div> Nothing bought. Go back </div>
      )}
    </div>
  );
}

Summary.displayName = displayName;
Summary.propTypes = propTypes;

export default Summary;
