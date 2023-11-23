import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import {toast} from 'react-hot-toast';

const FoodCard = ({ id, img, name, price, desc, rating, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[250px] bg-white p-5 font-bold flex flex-col gap-2">
      <img
        src={img}
        alt={name}
        className="hover:scale-105 transition-all duration-500 ease-in-out cursor-grab h-[125px]"
      />
      <div className="flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <AiFillStar className="text-yellow-500" />
          <span>{rating}</span>
        </div>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, desc, rating, img, qty: 1 }));
            toast.success(`Added ${name}`);

          }}
          className="bg-green-500 text-white rounded-lg hover:bg-green-600 p-1"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
