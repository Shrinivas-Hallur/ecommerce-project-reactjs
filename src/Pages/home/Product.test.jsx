import React from "react";
import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";
import { userEvent } from "@testing-library/user-event";
import axios from "axios";

vi.mock("axios");

describe("Product component", () => {
  let product;
  let loadCart;
  let user;
  //     id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  //     image: "images/products/intermediate-composite-basketball.jpg",
  //     name: "Intermediate Size Basketball",
  //     rating: {
  //       stars: 4,
  //       count: 127,
  //     },
  //     priceCents: 2095,
  //     keywords: ["sports", "basketballs"],
  //   };

//   const loadCart = vi.fn();

  beforeEach(() => {
    product = {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127,
      },
      priceCents: 2095,
      keywords: ["sports", "basketballs"],
    };
    loadCart = vi.fn();
    user=userEvent.setup();
  });
  it("displays the product details correctlty", () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText("Intermediate Size Basketball"),
    ).toBeInTheDocument();

    expect(screen.getByText("$20.95")).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/intermediate-composite-basketball.jpg",
    );

    expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute(
      "src",
      "images/ratings/rating-40.png",
    );

    expect(screen.getByText("127")).toBeInTheDocument();
  });

  it("adds a product to the cart", async () => {
    // const product = {
    //   id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    //   image: "images/products/intermediate-composite-basketball.jpg",
    //   name: "Intermediate Size Basketball",
    //   rating: {
    //     stars: 4,
    //     count: 127,
    //   },
    //   priceCents: 2095,
    //   keywords: ["sports", "basketballs"],
    // };

    // const loadCart = vi.fn();

    render(<Product product={product} loadCart={loadCart} />);

    // const user = userEvent.setup();
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    });

    expect(loadCart).toHaveBeenCalled();
  });

  it('selects a quantity',async ()=>{
    render(<Product product={product} loadCart={loadCart}/>);

    const quantitySelector=screen.getByTestId('product-quantity-selector');
    
    expect(quantitySelector).toHaveValue('1');

    // const user=userEvent.setup();
    await user.selectOptions(quantitySelector,'3');
    expect(quantitySelector).toHaveValue('3');

    const addToCartButton=screen.getByTestId('add-to-cart-button');

    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith(
        '/api/cart-items',
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:3
        }
    );
    expect(loadCart).toHaveBeenCalled();
  });
});
