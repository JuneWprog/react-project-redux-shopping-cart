import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";


const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + (curr.orderAmount), 0));
    setTotalPrice((cart.reduce((acc, curr) => acc + (curr.price *curr.orderAmount), 0)).toFixed(2));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="flex justify-center align-baseline space-around w-[80vw] mx-auto">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-3 max-w-6xl mx-auto">
            <div className="grid-cols-2 justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} key={cartItem.id} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>: {totalCart}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: {totalPrice}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Cart
