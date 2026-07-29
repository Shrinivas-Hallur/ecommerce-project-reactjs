// import React from 'react';
// import { formatMoney } from "../../utils/money";
// import dayjs from "dayjs";
// import axios from "axios";
// export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
//   return (
//     <div className="delivery-options">
//       <div className="delivery-options-title">Choose a delivery option:</div>
//       {deliveryOptions.map((deliveryOption) => {
//         let priceString = "FREE Shipping";

//         if (deliveryOption.priceCents > 0) {
//           priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
//         }

//         const updateDeliveryOption = async () => {
//           await axios.put(`/api/cart-items/${cartItem.productId}`, {
//             deliveryOptionId: deliveryOption.id,
//           });
//           await loadCart();
//         };

//         return (
//           <div
//             key={deliveryOption.id}
//             className="delivery-option"
//             onClick={updateDeliveryOption}
//             data-testid="delivery-option"
//           >
//             <input
//               type="radio"
//               checked={deliveryOption.id === cartItem.deliveryOptionId}
//               onChange={() => {}}
//               className="delivery-option-input"
//               data-testid="delivery-option-input"
//               name={`delivery-option-${cartItem.productId}`}
//             />
//             <div>
//               <div className="delivery-option-date">
//                 {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
//                   "dddd, MMMM D",
//                 )}
//               </div>
//               <div className="delivery-option-price">{priceString}</div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


import React from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import api from "../../api";

export function DeliveryOptions({
  deliveryOptions,
  cartItem,
  loadCart,
}) {
  const updateDeliveryOption = async (deliveryOptionId) => {
    try {
      await api.put(`/api/cart-items/${cartItem.productId}`, {
        deliveryOptionId,
      });

      await loadCart();
    } catch (error) {
      console.error("Error updating delivery option:", error);
    }
  };

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>

      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(
            deliveryOption.priceCents
          )} - Shipping`;
        }

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            onClick={() => updateDeliveryOption(deliveryOption.id)}
            data-testid="delivery-option"
          >
            <input
              type="radio"
              checked={
                deliveryOption.id === cartItem.deliveryOptionId
              }
              onChange={() => {}}
              className="delivery-option-input"
              data-testid="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />

            <div>
              <div className="delivery-option-date">
                {dayjs(
                  deliveryOption.estimatedDeliveryTimeMs
                ).format("dddd, MMMM D")}
              </div>

              <div className="delivery-option-price">
                {priceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}