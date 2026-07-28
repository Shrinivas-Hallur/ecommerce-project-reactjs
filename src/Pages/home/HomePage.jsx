import "./HomePage.css";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
// import { products } from "../../starting-code/data/products";
import axios from "axios";
// import { formatMoney } from "../../utils/money";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router-dom";
import React from 'react';

export function HomePage({ cart , loadCart}) {
  const [products, setProducts] = useState([]);
  const [searchParams] =useSearchParams();
  const search=searchParams.get('search');

useEffect(() => {
  //  console.log('useEffect');
  const getHomeData = async () => {
    try {
      const urlPath=search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  getHomeData();
}, [search]);

  //   axios.get('http://localhost:3000/api/products')
  //     // .then((response)=>{
  //     //     return response.json();
  //     // }).then((data)=>{
  //     //         console.log(data);
  //     // });
  //     .then((response)=>{
  //         console.log(response.data);
  //     })
  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        {/* <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={product.image}
                  />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars*10}.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">{formatMoney(product.priceCents)}</div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div> */}
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
