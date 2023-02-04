import { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { InputContext } from "../../Contexts/SearchInputContext";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import { addToDb } from "../LocalStorage/Database";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  //search Input

  const { inputValue } = useContext(InputContext);


  //product Data Load

  const products = useLoaderData();

  const [cartProduct, setCartProducts] = useCart(products); //load cart stored data

  const selectedProduct = products.filter(
    (product) => product.name === inputValue
  );

  //handelOrderReview

  const navigate = useNavigate();

  const handleOrderReview = () => {
    const path = "/order";
    navigate(path);
  };

  //Add Product to cart
  const addToCart = (productDetails) => {
    let newCartProduct = [];

    const checkProductExistence = cartProduct.find(
      (item) => item.id === productDetails.id
    );

    if (!checkProductExistence) {
      productDetails.quantity = 1;

      newCartProduct = [...cartProduct, productDetails];
    } else {
      const rest = cartProduct.filter((item) => item.id !== productDetails.id);

      productDetails.quantity = productDetails.quantity + 1;

      newCartProduct = [...rest, productDetails];
    }

    setCartProducts(newCartProduct);

    addToDb(productDetails.id);
  };
  return (
    <div>
      <div className="shop-section">
        <div className="product-section row row-cols-1 row-cols-md-3 g-4">
          {
          selectedProduct.length === 0 ?products.map((item) => (
            <Product item={item} key={item.id} addToCart={addToCart}></Product>
          )):selectedProduct.map((item) => (
            <Product item={item} key={item.id} addToCart={addToCart}></Product>
          ))}
        </div>

        <div className="cart-section">
            <Cart cartProduct={cartProduct}>
              <div class="d-grid gap-2 mb-3">
                <button class="btn btn-outline-danger" type="button">
                  Clear Cart
                </button>
              </div>
              <div class="d-grid gap-2 mb-3">
                <button
                  onClick={handleOrderReview}
                  class="btn btn-outline-danger"
                  type="button"
                >
                  Order Review
                </button>
              </div>
            </Cart>
          
        </div>
      </div>
    </div>
  );
};

export default Shop;
