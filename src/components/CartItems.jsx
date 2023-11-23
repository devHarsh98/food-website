import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import {toast} from 'react-hot-toast';

const CartItems = ({ id, name, img, price, desc, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg font-bold p-2">
      <div className="flex items-center gap-10">
        <img src={img} alt={name} className="w-[50px]" />
        <h2>{name}</h2>
        <MdDelete
           onClick={() => {
            dispatch(removeFromCart({ id, img, name, price, qty }));
            toast(`${name} Removed!`, {
              icon: "👋",
            });
          }}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-10 mt-1">
        <span>₹{price}</span>
        <div className="flex gap-2 absolute right-8">
          <AiOutlineMinus
            className="border-2 border-gray-700 rounded-md p-2 font-bold text-2xl hover:bg-green-600 hover:text-white"
            onClick={() =>
              qty > 1 ? dispatch(decrementQty({ id })) : (qty = 1)
            }
          />
          <span>{qty}</span>
          <AiOutlinePlus
            className="border-2 border-gray-700 rounded-md p-2 font-bold text-2xl hover:bg-green-600 hover:text-white"
            onClick={() =>
              qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
