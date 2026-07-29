
// import {NavLink} from 'react-router-dom';
// import './header.css'
// import { useState } from 'react';
// import {useNavigate, useSearchParams} from 'react-router-dom';
// import React from 'react'

// export function Header({cart}) {

//   const navigate=useNavigate();

  
//   const [searchParams]=useSearchParams();

//   const searchText=searchParams.get('search');

//   const [search, setSearch]=useState(searchText || '');

//   const updateSearchInput=(event)=>{
//     setSearch(event.target.value);
//   };

//   const searchProducts=()=>{
//     console.log(search);
//     navigate(`/?search=${search}`)
//   }
//   let totalQuantity=0;

//   (cart || []).forEach((cartItem)=>{
//     totalQuantity+=Number(cartItem.quantity);
//   })
//   return (
//     <div className="header">
//       <div className="left-section">
//         <NavLink to="/" className="header-link">
//           <img className="logo" src="/images/logo-white.png" data-testid="header-logo"/>
//           <img className="mobile-logo" src="/images/mobile-logo-white.png" data-testid="header-mobile-logo"/>
//         </NavLink>
//       </div>

//       <div className="middle-section">
//         <input className="search-bar" type="text" placeholder="Search" 
//           value={search} onChange={updateSearchInput} data-testid="header-search-bar"
//         />

//         <button className="search-button"
//           onClick={searchProducts}
//            data-testid="header-search-button"
//         >
//           <img className="search-icon" src="/images/icons/search-icon.png" />
//         </button>
//       </div>

//       <div className="right-section">
//         <NavLink className="orders-link header-link" to="/orders" data-testid="header-orders-link">
//           <span className="orders-text">Orders</span>
//         </NavLink>

//         <NavLink className="cart-link header-link" to="/checkout" data-testid="header-cart-link">
//           <img className="cart-icon" src="/images/icons/cart-icon.png" />
//           <div className="cart-quantity">{totalQuantity}</div>
//           <div className="cart-text">Cart</div>
//         </NavLink>
//       </div>
//     </div>
//   );
// }


import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import React from "react";

const BASE_URL = import.meta.env.BASE_URL;

export function Header({ cart }) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");

  const [search, setSearch] = useState(searchText || "");

  const updateSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const searchProducts = () => {
    navigate(`/?search=${encodeURIComponent(search)}`);
  };

  let totalQuantity = 0;

  (cart || []).forEach((cartItem) => {
    totalQuantity += Number(cartItem.quantity);
  });

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img
            className="logo"
            src={`${BASE_URL}images/logo-white.png`}
            alt="Logo"
            data-testid="header-logo"
          />

          <img
            className="mobile-logo"
            src={`${BASE_URL}images/mobile-logo-white.png`}
            alt="Mobile Logo"
            data-testid="header-mobile-logo"
          />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearchInput}
          data-testid="header-search-bar"
        />

        <button
          className="search-button"
          onClick={searchProducts}
          data-testid="header-search-button"
        >
          <img
            className="search-icon"
            src={`${BASE_URL}images/icons/search-icon.png`}
            alt="Search"
          />
        </button>
      </div>

      <div className="right-section">
        <NavLink
          className="orders-link header-link"
          to="/orders"
          data-testid="header-orders-link"
        >
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink
          className="cart-link header-link"
          to="/checkout"
          data-testid="header-cart-link"
        >
          <img
            className="cart-icon"
            src={`${BASE_URL}images/icons/cart-icon.png`}
            alt="Cart"
          />

          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
