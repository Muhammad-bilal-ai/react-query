import React from "react";

function ProductCard({ product }) {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-40 object-cover object-center"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">{product.title}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
