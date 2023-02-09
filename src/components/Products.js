import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "My First Book of Pencil Control",
    author: "by Wonder House Books | 25 April 2018",
    price: 89,
    imgURL: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 2,
    name: "108 Panchatantra Stories",
    author: "by Maple Press  | 1 September 2020",
    price: 98,
    imgURL: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 3,
    name: "Amazing Questions & Answers Science",
    author: "by Om Books Editorial Team  | 25 November 2018",
    price: 143,
    imgURL: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 4,
    name: "My First Book of Pencil Control",
    author: "by Wonder House Books | 25 April 2018",
    price: 57,
    imgURL: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 5,
    name: "My First 1000 Words",
    author: "by Wonder House Books  | 1 January 2018",
    price: 149,
    imgURL: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 6,
    name: "101 Panchatantra Stories for Children",
    author: "by Om Books Editorial Team | 30 September 2020",
    price: 135,
    imgURL: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 7,
    name: "Pre-School Activities Pack ",
    author: "by Om Books Editorial Team  | 1 January 2021",
    price: 693,
    imgURL: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 8,
    name: "Early Learning Library Pack 1",
    author: "by Wonder House Books  | 6 December 2020",
    price: 289,
    imgURL: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 9,
    name: "Blossom Moral Story Book for Kids ",
    author: "by Content Team at Target Publications",
    price: 80,
    imgURL: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 10,
    name: "Brain Activity Book for Kids",
    author: "by Maple Press | 1 September 2021",
    price: 86,
    imgURL: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 11,
    name: "Willy the Silly Panda",
    author: "by Rebecca Smith  | 14 December 2021",
    price: 120,
    imgURL: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 12,
    name: "Grandma's Bag of Stories",
    author: "by Sudha Murty | 1 January 2015",
    price: 157,
    imgURL: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 13,
    name: "MacBook",
    imgURLURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 14,
    name: "Lenovo Yoga",
    imgURLURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 50,
  },
  {
    id: 15,
    name: "Dell lattitude",
    imgURLURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 125,
  },

];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURLURL={product.imgURLURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
