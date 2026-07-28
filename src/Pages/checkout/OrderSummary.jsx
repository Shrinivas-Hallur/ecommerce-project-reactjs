// import dayjs from "dayjs";
// import { formatMoney } from "../../utils/money";
import React from 'react';
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";
import { DeliveryDate } from "./DeliveryDate";
// import axios from 'axios';

export function OrderSummary({cart, deliveryOptions, loadCart}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
        //   const selectedDeliveryOption = deliveryOptions.find(
        //     (deliveryOption) => {
        //       return deliveryOption.id === cartItem.deliveryOptionId;
        //     },
        //   );

        // const deleteCartItem=async ()=>{
        //   await axios.delete(`/api/cart-items/${cartItem.productId}`);
        //   await loadCart();
        // };
          return (
              <div key={cartItem.productId} className="cart-item-container">
                {/* <div className="delivery-date">
                  Delivery date:{" "}
                  {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D",
                  )}
                </div> */}
                <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions}/>

                <div className="cart-item-details-grid">
                  {/* <img className="product-image" src={cartItem.product.image} />

                  <div className="cart-item-details">
                    <div className="product-name">{cartItem.product.name}</div>
                    <div className="product-price">
                      {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity:{" "}
                        <span className="quantity-label">
                          {cartItem.quantity}
                        </span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span className="delete-quantity-link link-primary">
                        Delete
                      </span>
                    </div>
                  </div> */}

                  <CartItemDetails cartItem={cartItem} loadCart={loadCart}/>
{/* 
                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    {deliveryOptions.map((deliveryOption) => {
                      let priceString = "FREE Shipping";

                      if (deliveryOption.priceCents > 0) {
                        priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
                      }
                      return (
                        <>
                          <div
                            key={deliveryOption.id}
                            className="delivery-option"
                          >
                            <input
                              type="radio"
                              checked={
                                deliveryOption.id === cartItem.deliveryOptionId
                              }
                              className="delivery-option-input"
                              name={`delivery-option-${cartItem.productId}`}
                            />
                            <div>
                              <div className="delivery-option-date">
                                {dayjs(
                                  deliveryOption.estimatedDeliveryTimeMs,
                                ).format("dddd, MMMM D")}
                              </div>
                              <div className="delivery-option-price">
                                {priceString}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div> */}

                  <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart}/>
                </div>
              </div>
          );
        })}
    </div>
  );
}
