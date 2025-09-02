"use client";

import { Product } from "@/types/types";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // you can set this to 10 or 15

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-10 text-gray-700 sm:py-16 lg:py-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No items found. Try adjusting your filters.
          </p>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentProducts.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white shadow-md"
                >
                  {/* Image */}
                  <Link
                    href="#"
                    className="relative mx-2 mt-2 flex h-50 overflow-hidden rounded-md"
                  >
                    <Image
                      src={item.image}
                      // src={imagePath.trim()}
                      alt={item.name}
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </Link>

                  {/* Details */}
                  <div className="mt-4 px-5 pb-5">
                    <Link href="#">
                      <h5 className="text-xl tracking-tight text-slate-900 truncate">
                        {item.name}
                      </h5>
                    </Link>

                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">
                          ${item.price}
                        </span>
                      </p>
                    </div>

                    {/* Add to cart */}
                    <Link
                      href="#"
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 
                            13L5.4 5M7 13l-2.293 
                            2.293c-.63.63-.184 
                            1.707.707 1.707H17m0 
                            0a2 2 0 100 4 2 2 0 
                            000-4zm-8 2a2 2 0 
                            11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to cart
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md border text-sm font-medium ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white text-slate-900 hover:bg-gray-100"
                  }`}
                >
                  Previous
                </button>
                <span className="text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md border text-sm font-medium ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white text-slate-900 hover:bg-gray-100"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
