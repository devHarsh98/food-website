import React from "react";
import {useDispatch} from 'react-redux';
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between flex-col lg:flex-row m-5 mb-12">
      <div>
        <h3 className="text-xl font-bold text-gray-500">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Food Website</h1>
      </div>
      <div>
        <input
          type="search"
          placeholder="search here..."
          className="p-3 outline-none border border-gray-500 rounded-lg text-sm mt-4 
          lg:mt-0 w-full lg:w-[26vw]"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Navbar;
