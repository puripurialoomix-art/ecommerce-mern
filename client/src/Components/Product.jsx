import React from "react";

const ProductCard = ({ image, title, rating, ratingCount, oldPrice, newPrice, discount }) => {
  return (
    <div className="w-full bg-white rounded-lg border p-3 hover:shadow-lg transition cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-3"
      />

      <h3 className="text-sm font-medium leading-5 text-gray-800 mb-1">
        {title}
      </h3>

      <div className="flex items-center gap-1 mb-1">
        <span className="text-xs bg-green-600 text-white px-1.5 py-0.5 rounded-md font-semibold">
          ⭐ {rating}
        </span>
        <span className="text-xs text-gray-600">{ratingCount} Ratings</span>
      </div>

      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-bold text-gray-900">₹{newPrice}</span>
        <span className="text-xs line-through text-gray-500">₹{oldPrice}</span>
        <span className="text-xs text-green-600 font-semibold">{discount}% Off</span>
      </div>

      <p className="text-xs text-green-700 font-medium">
        Free Delivery in Two Days
      </p>
    </div>
  );
};

export default ProductCard;
