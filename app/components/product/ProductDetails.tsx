"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/types";
import { useCart } from "../cart/CartItems";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onCheckout: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onCheckout,
}) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const [selectedType, setSelectedType] = useState(product.type);

  const cartQuantity =
    cart.find((item) => item.id === product.id)?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };

  // Available types based on coffee products
  const availableTypes = ["Powder", "Whole Bean", "Ground"];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Products
        </button>

        {/* Breadcrumb */}
        <nav className="flex mb-8">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  Home
                </a>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Products
                  </a>
                </div>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page"
                  >
                    {product.categoryId}
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Product Images */}
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="flex items-start">
              <div className="order-2 ml-5 flex-1">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <Image
                    className="h-full w-full max-w-full object-cover"
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                  />
                </div>
              </div>

              <div className="order-1 w-32 flex-shrink-0">
                <div className="flex flex-col items-start">
                  <button
                    type="button"
                    className="mb-3 h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-900 aspect-square"
                  >
                    <Image
                      className="h-full w-full object-cover"
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                    />
                  </button>
                  <button
                    type="button"
                    className="mb-3 h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 border-transparent aspect-square"
                  >
                    <Image
                      className="h-full w-full object-cover"
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm font-medium text-gray-500">
                1,209 Reviews
              </p>
            </div>

            {/* Product Type */}
            <h2 className="mt-8 text-base text-gray-900">Product Type</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              {availableTypes.map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                    className="peer sr-only"
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold cursor-pointer">
                    {type}
                  </p>
                </label>
              ))}
            </div>

            {/* Price and Add to Cart */}
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">${product.price}</h1>
              </div>

              {cartQuantity === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to cart
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
                    <button
                      onClick={() => handleQuantityChange(cartQuantity - 1)}
                      className="flex items-center justify-center w-8 h-8 bg-white rounded-full border hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <span className="font-semibold text-lg mx-4">
                      {cartQuantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(cartQuantity + 1)}
                      className="flex items-center justify-center w-8 h-8 bg-white rounded-full border hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={onCheckout}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>

            {/* Features */}
            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Premium quality
              </li>
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Fresh delivery
              </li>
            </ul>
          </div>

          {/* Description */}
          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a
                  href="#"
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  Description
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                >
                  Reviews
                  <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                    1,209
                  </span>
                </a>
              </nav>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <h1 className="text-3xl font-bold">Premium Quality</h1>
              <p className="mt-4">
                Experience the finest quality with our carefully selected{" "}
                {product.name}. Each product is crafted with attention to detail
                and sourced from the best suppliers.
              </p>
              <h1 className="mt-8 text-3xl font-bold">Fresh & Delicious</h1>
              <p className="mt-4">
                Our {product.type.toLowerCase()} variety ensures maximum
                freshness and flavor. Perfect for those who appreciate quality
                and taste.
              </p>
              <p className="mt-4">
                Whether you're treating yourself or looking for the perfect
                gift, this {product.name} delivers an exceptional experience
                every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
