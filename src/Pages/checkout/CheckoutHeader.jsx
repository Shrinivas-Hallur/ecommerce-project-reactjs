// import React from 'react';
// import './CheckoutHeader.css'
// import {Link} from 'react-router-dom'
// export function CheckoutHeader({cart}) {

//   let totalQuantity = 0;

//   cart.forEach((cartItem) => {
//     totalQuantity += cartItem.quantity;
//   });
//   return (
//     <>
//       <div className="checkout-header"  data-testid="checkout-header">
//         <div className="header-content">
//           <div className="checkout-header-left-section">
//             <Link to="/">
//               <img className="logo" src="images/logo.png" />
//               <img className="mobile-logo" src="images/mobile-logo.png" />
//             </Link>
//           </div>

//           <div className="checkout-header-middle-section">
//             Checkout (
//             <Link className="return-to-home-link" to="/">
//               {totalQuantity} items
//             </Link>
//             )
//           </div>

//           <div className="checkout-header-right-section">
//             <img src="images/icons/checkout-lock-icon.png" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import "./CheckoutHeader.css";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL;

export function CheckoutHeader({ cart }) {
  let totalQuantity = 0;

  (cart || []).forEach((cartItem) => {
    totalQuantity += Number(cartItem.quantity);
  });

  return (
    <div className="checkout-header" data-testid="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img
              className="logo"
              src={`${BASE_URL}images/logo.png`}
              alt="Logo"
            />

            <img
              className="mobile-logo"
              src={`${BASE_URL}images/mobile-logo.png`}
              alt="Mobile Logo"
            />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {totalQuantity} items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img
            src={`${BASE_URL}images/icons/checkout-lock-icon.png`}
            alt="Secure Checkout"
          />
        </div>
      </div>
    </div>
  );
}