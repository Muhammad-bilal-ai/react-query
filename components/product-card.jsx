import React from "react";

function ProductCard({ product }) {
  console.log("--Product Card--", product);
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-35 object-cover object-center mt-2"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">{product.title}</h2>
        <p className="mt-2 text-gray-400">{product.description}</p>
        <p className="mt-2 text-gray-600">Price: {product.price}$</p>
      </div>
      <div className="flex justify-center my-4"></div>
    </div>
  );
}

export default ProductCard;
