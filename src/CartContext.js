import { createContext, useState, useReducer } from "react";
// import products from "./products.json";

const cartContext = createContext();
export default cartContext;

const initialState = {
  products: [
    {
      "id": 100,
      "image": "./store.jpeg",
      "sale": false,
      "title": "Fancy Product",
      "rating": "",
      "initial_price": "",
      "price": "$40.00 - $80.00"
    },
    {
      "id": 101,
      "image": "./item.jpeg",
      "sale": true,
      "title": "Special Items",
      "rating": "5",
      "initial_price": "$20.00",
      "price": "$18.00"
    },
    {
      "id": 102,
      "image": "./item.jpeg",
      "sale": true,
      "title": "Sale item",
      "rating": "",
      "initial_price": "$50.00",
      "price": "$25.00"
    },
    {
      "id": 103,
      "image": "./item.jpeg",
      "sale": false,
      "title": "Popular Item",
      "rating": "5",
      "initial_price": "",
      "price": "$40.00"
    },
    {
      "id": 104,
      "image": "./item.jpeg",
      "sale": true,
      "title": "Sale Item",
      "rating": "",
      "initial_price": "$50.000",
      "price": "$25.00"
    },
    {
      "id": 105,
      "image": "./item.jpg",
      "sale": false,
      "title": "Fancy Product",
      "rating": "",
      "initial_price": "",
      "price": "$120.00 - $280.00"
    },
    {
      "id": 106,
      "image": "../images/item.jpg",
      "sale": true,
      "title": "Special Item",
      "rating": "5",
      "initial_price": "$20.00",
      "price": "$18.00"
    },
    {
      "id": 107,
      "image": "./item.jpg",
      "sale": true,
      "title": "Popular Item",
      "rating": "5",
      "initial_price": "",
      "price": "$40.00"
    }
  ],
  cart: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "remove_from_cart":
      return {
        ...state,
        cart: [...state.cart.filter((c) => c.id !== action.payload.id)],
      };
    default:
      break;
  }
};
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
};