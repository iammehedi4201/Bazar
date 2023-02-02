import React from "react";
import { Alert } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import SelectedProduct from "../Inner cart/SelectedProduct";
import { deleteAProductFormDb } from "../LocalStorage/Database";

import "./Order.css";

const Order = () => {
  const products = useLoaderData();

  const [cartProduct, setCartProducts] = useCart(products);

  const deleteAProduct = (ProductId) => {
    const restCartItem = cartProduct.filter((item) => item.id !== ProductId);

    setCartProducts(restCartItem);

    deleteAProductFormDb(ProductId);
  };

  return (
    <div>
      {cartProduct.length === 0 ? (
        <div className="error-message">
          <Alert variant="danger">
            <Alert.Heading className="text-center">
              Please Selecte a Product for Shopping
            </Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </div>
      ) : (
        <h3 className="text-center text-danger border border-dark mt-2">
          Selected Vegetable
        </h3>
      )}
      <div className="order-review-container">
        <section className="selected-product-section">
          {cartProduct.map((item) => (
            <SelectedProduct
              item={item}
              key={item.id}
              deleteAProduct={deleteAProduct}
            ></SelectedProduct>
          ))}
        </section>

        <section className="Cart-section mt-5">
          {cartProduct.length === 0 ? (
            ""
          ) : (
            <Cart cartProduct={cartProduct}>
              <div class="d-grid gap-2 mb-3">
                <button class="btn btn-outline-danger" type="button">
                  Clear Cart
                </button>
              </div>
              <div class="d-grid gap-2 mb-3">
                <button class="btn btn-outline-danger" type="button">
                  Proceed Checkout
                </button>
              </div>
            </Cart>
          )}
        </section>
      </div>
    </div>
  );
};

export default Order;
