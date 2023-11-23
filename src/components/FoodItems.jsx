import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <div className="mt-5 ml-5 mb-10 flex flex-col gap-10 justify-start items-center lg:flex-wrap lg:flex-row">
      {FoodData.filter((food) => {
        if (selectedCategory === "All") {
          return food.name.toLowerCase().includes(search.toLowerCase());
        } else {
          return food.category === selectedCategory && food.name.toLowerCase().includes(search.toLowerCase());
        }
      }).map((food, index) => 
        (
          <FoodCard
            key={index}
            id={food.id}
            img={food.img}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
          />
        )
      )}
    </div>
  );
};

export default FoodItems;
