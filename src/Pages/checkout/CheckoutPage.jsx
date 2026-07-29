// import React from 'react';
// import "./CheckoutPage.css";
// import { CheckoutHeader } from "./CheckoutHeader";
// // import { formatMoney } from "../../utils/money";
// import axios from "axios";
// import { useState, useEffect } from "react";
// // import dayjs from "dayjs";
// import { OrderSummary } from "./OrderSummary";
// import { PaymentSummary } from "./PaymentSummary";

// export function CheckoutPage({ cart , loadCart}) {
//   const [deliveryOptions, setDeliveryOptions] = useState([]);
//   const [paymentSummary, setPaymentSummary] = useState(null);
// useEffect(() => {
//   const fetchCheckoutData = async () => {
//     const response = await axios.get(
//       "/api/delivery-options?expand=estimatedDeliveryTime"
//     );
//     setDeliveryOptions(response.data);
//   };
//   fetchCheckoutData();
// },[]);

// useEffect(()=>{
//   const fetchPaymentSummary=async ()=>{
//     const response=await axios.get('/api/payment-summary');
//     setPaymentSummary(response.data);
//   };
//   fetchPaymentSummary();
// },[cart]);

//   return (
//     <>
//       <title>Checkout</title>
//       <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
//       <CheckoutHeader cart={cart}/>

//       <div className="checkout-page" >
//         <div className="page-title">Review your order</div>

//         <div className="checkout-grid">
//           <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

//           {/* <div className="payment-summary">
//             <div className="payment-summary-title">Payment Summary</div>

//             {paymentSummary && (
//               <>
//                 <div className="payment-summary-row">
//                   <div>Items (3):</div>
//                   <div className="payment-summary-money">
//                     {formatMoney(paymentSummary.productCostCents)}
//                   </div>
//                 </div>

//                 <div className="payment-summary-row">
//                   <div>Shipping &amp; handling:</div>
//                   <div className="payment-summary-money">
//                     {formatMoney(paymentSummary.shippingCostCents)}
//                   </div>
//                 </div>

//                 <div className="payment-summary-row subtotal-row">
//                   <div>Total before tax:</div>
//                   <div className="payment-summary-money">
//                     {formatMoney(paymentSummary.totalCostBeforeTaxCents)}
//                   </div>
//                 </div>

//                 <div className="payment-summary-row">
//                   <div>Estimated tax (10%):</div>
//                   <div className="payment-summary-money">
//                     {formatMoney(paymentSummary.texCents)}
//                   </div>
//                 </div>

//                 <div className="payment-summary-row total-row">
//                   <div>Order total:</div>
//                   <div className="payment-summary-money">
//                     {formatMoney(paymentSummary.totalCostCents)}
//                   </div>
//                 </div>

//                 <button className="place-order-button button-primary">
//                   Place your order
//                 </button>
//               </>
//             )}
//           </div> */}
//           <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import api from "../../api";
import { useState, useEffect } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      try {
        const response = await api.get(
          "/api/delivery-options?expand=estimatedDeliveryTime"
        );
        setDeliveryOptions(response.data);
      } catch (error) {
        console.error("Error loading delivery options:", error);
      }
    };

    fetchCheckoutData();
  }, []);

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      try {
        const response = await api.get("/api/payment-summary");
        setPaymentSummary(response.data);
      } catch (error) {
        console.error("Error loading payment summary:", error);
      }
    };

    fetchPaymentSummary();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>

      <link
        rel="icon"
        type="image/png"
        href={`${import.meta.env.BASE_URL}cart-favicon.png`}
      />

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />

          <PaymentSummary
            paymentSummary={paymentSummary}
            loadCart={loadCart}
          />
        </div>
      </div>
    </>
  );
}