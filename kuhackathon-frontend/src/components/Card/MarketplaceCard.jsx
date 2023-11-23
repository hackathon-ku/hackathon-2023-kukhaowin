'use client';

import React from "react";
import { Badge } from "flowbite-react";

const MarketplaceCard = ({ product, onClick }) => {
  return (
    <div
      className="group relative block overflow-hidden rounded-md"
      onClick={() => onClick(product)}
    >
      <img
        src="/images/cake.jpg"
        alt=""
        className="object-cover transition duration-500 group-hover:scale-105 h-36 w-full"
      />

      <div className="relative border border-gray-100 bg-white p-4">
        <h3 className="mt-2 text-md font-medium text-gray-900">
          {product?.name}
        </h3>
        {!product?.isFree ? (
          <p className="mt-1.5 text-xs text-gray-700">
            ราคา <span className="font-medium">{product?.price}</span> บาท
          </p>
        ) : null}
        {product?.isFree ? (
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium rounded-md">
            Free
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default MarketplaceCard;
