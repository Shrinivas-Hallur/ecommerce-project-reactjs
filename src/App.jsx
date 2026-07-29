// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// import "./App.css";
// import { HomePage } from "./Pages/home/HomePage.jsx";
// import { Routes, Route } from "react-router-dom";
// import { CheckoutPage } from "./Pages/checkout/CheckoutPage.jsx";
// import { OrdersPage } from "./Pages/Orders/OrdersPage.jsx";
// import { TrackingPage } from "./Pages/TrackingPage.jsx";
// import { NotFoundPage } from "./Pages/NotFoundPage.jsx";
// import axios from "axios";
// import { useState, useEffect } from "react";

// window.axios=axios;

// function App() {
//   const [cart, setCart] = useState([]);

//   const loadCart = async () => {
//     const response = await axios.get("/api/cart-items?expand=product");
//     // .then((response)=>{
//     //     console.log(response.data);
//     setCart(response.data);
//   };

//   useEffect(() => {

//     loadCart();

//     // const fetchAppData = async () => {
//     //   const response = await axios.get("/api/cart-items?expand=product");
//     //   // .then((response)=>{
//     //   //     console.log(response.data);
//     //   setCart(response.data);
//     // };
//     // // .catch((error) => {
//     // //     console.log(error);
//     // // });
//     // fetchAppData();
//   }, []);

//   return (
//     <>
//       <Routes>
//         <Route index element={<HomePage cart={cart} loadCart={loadCart}/>}></Route>
//         <Route path="checkout" element={<CheckoutPage cart={cart}  loadCart={loadCart}/>}></Route>
//         <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>}></Route>
//         <Route
//           path="tracking/:orderId/:productId"
//           element={<TrackingPage cart={cart} />}
//         />
//         <Route path="*" element={<NotFoundPage />}></Route>
//       </Routes>
//       {/* <HomePage /> */}
//     </>
//   );
// }

// export default App;


import "./App.css";
import { HomePage } from "./Pages/home/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./Pages/Orders/OrdersPage.jsx";
import { TrackingPage } from "./Pages/TrackingPage.jsx";
import { NotFoundPage } from "./Pages/NotFoundPage.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

window.axios = axios;

// Backend URL
const API_URL = import.meta.env.PROD
  ? "https://ecommerce-backend-reactjs.onrender.com"
  : "";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/cart-items?expand=product`
      );
      setCart(response.data);
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<HomePage cart={cart} loadCart={loadCart} />}
      />

      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />

      <Route
        path="orders"
        element={<OrdersPage cart={cart} loadCart={loadCart} />}
      />

      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
