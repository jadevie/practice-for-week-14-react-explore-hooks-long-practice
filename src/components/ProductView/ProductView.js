import React, { useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css';

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
  console.log(selectedProduct);
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => {
                setSelectedProduct(item);
                setIsSelected(!isSelected);
              }}
              isSelected={isSelected}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
            onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
