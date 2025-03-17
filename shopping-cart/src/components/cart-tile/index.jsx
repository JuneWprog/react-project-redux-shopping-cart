import React from "react";
import { useDispatch } from "react-redux";
// import { removeFromCart } from "../../store/slices/cart-slice";
import {
  incrementAmount,
  decrementAmount,
} from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();
  // function handleRemoveFromCart() {
  //   dispatch(removeFromCart(cartItem.id));
  // }

  function handleIncrement() {
    dispatch(incrementAmount(cartItem.id));
  }

  function handleDecrement() {
    dispatch(decrementAmount(cartItem.id));
  }

  return (
    <>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <p className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {/* {cartItem?.title} */}
            {cartItem?.price} x {cartItem?.orderAmount}
          </p>
        </div>
        <div className="flex, flex-row">
          <p>
            <button onClick={() => handleIncrement(cartItem.id)}>+</button>{" "}
            <button onClick={() => handleDecrement(cartItem.id)}>-</button>
          </p>{" "}
        </div>
        <div>
          {/* <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From cart
          </button> */}
        </div>
      </div>
    </>
  );
};
export default CartTile;
