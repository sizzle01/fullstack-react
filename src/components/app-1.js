import React from "react";
import Product from "./app-2";
import './seed'



class ProductList extends React.Component {
  render() {
    const productComponents = window.Seed.products.map((product) => (
      <Product
      key={'product-' + product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      />
      ));
      return (
        <div className='ui unstackable items'>
        {productComponents}
        </div>
        );
  }
}

export default ProductList

