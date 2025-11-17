import React from "react";

const Card = ({ src, title, price, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="h-48 p-4 flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          className="max-h-full w-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={src}
          alt={title}
        />
      </div>

      <div className="p-4">
        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">${price}</p>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
