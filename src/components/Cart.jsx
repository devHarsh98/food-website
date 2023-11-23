import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);


  const totalQty = cartItems.reduce((acc, item) => acc = acc + item.qty, 0); 
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`bg-white fixed top-0 right-0 lg:w-[20vw] w-full h-full p-6 ${activeCart ? 'translate-x-0 duration-500' : 'translate-x-full duration-500' }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-gray-700">My Order</h2>
          <IoMdClose
            className="border-2 border-gray-700 rounded-md p-1 text-xl hover:border-red-700 hover:text-red-700"
            onClick={() => setActiveCart(!activeCart)}
          />
        </div>
        {cartItems.length === 0 ? <h1 className="text-center text-xl text-gray-900 font-bold"> Your cart is empty </h1>:
          cartItems.map((food) => {
            return <CartItems key={food.id} id={food.id} name={food.name} img={food.img} price={food.price} desc={food.desc} qty={food.qty}/>
          })
        }
        <div className="absolute bottom-0">
          <div className="flex flex-col text-gray-700 font-bold">
            <span>Items : {totalQty}</span>
            <span>Total Amount : ₹{totalPrice}</span>
          </div>
          <hr className="w-[18vw] mt-2" />
          <button onClick={() => navigate('/success')} className="bg-green-500 text-white rounded-lg font-bold px-2 py-2 lg:w-[18vw] my-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart onClick={() => setActiveCart(!activeCart)}  className={ `${activeCart ? 'hidden' : 'bg-white rounded-full shadow-md text-5xl p-3 fixed bottom-5 right-5'} ${totalQty > 0 && 'animate-bounce delay-500 transition-all'}`}/>
    </>
  );
};

export default Cart;