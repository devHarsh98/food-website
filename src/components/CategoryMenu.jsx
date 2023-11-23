import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const uniqueCategories = () => {
    const uniqueCategoriesList = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategoriesList);
    console.log(categories);
  };

  useEffect(() => {
    uniqueCategories();
  }, []);

  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-5">
      <h1 className="text-xl font-semibold">Find the best food</h1>
      <div className="mt-4 flex gap-3 overflow-x-scroll lg:overflow-x-hidden">
        <button
          className={`bg-gray-200 rounded-lg px-3 py-2 font-bold hover:bg-green-500 hover:text-white ${selectedCategory === 'All' && 'bg-green-500 text-white'}`}
          onClick={() => dispatch(setCategory("All"))}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`bg-gray-200 rounded-lg px-3 py-2 font-bold hover:bg-green-500 hover:text-white ${selectedCategory === category && 'bg-green-500 text-white'}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
