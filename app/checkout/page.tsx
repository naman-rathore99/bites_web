"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../components/cart/CartItems";

interface CheckoutProps {
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCart();
  const [customization, setCustomization] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    alert(`Order placed successfully! 
Total: $${getTotalPrice().toFixed(2)}
Items: ${cart.map((item) => `${item.name} (${item.quantity})`).join(", ")}
${customization ? `Customization: ${customization}` : ""}
Customer: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}`);

    clearCart();
    setCustomization("");
    setCustomerInfo({ name: "", email: "", phone: "" });
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          Add some delicious items to get started!
        </p>
        <button
          onClick={onBack}
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center border-b bg-white py-4">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mr-4"
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
          Back
        </button>
        <a href="#" className="text-2xl font-bold text-gray-800">
          Your Order
        </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        {/* Order Summary */}
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items and customize your order.
          </p>

          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <Image
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.image}
                  alt={item.name}
                  width={112}
                  height={96}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.name}</span>
                  <span className="float-right text-gray-400">
                    ${item.price.toFixed(2)}
                  </span>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <textarea
            value={customization}
            onChange={(e) => setCustomization(e.target.value)}
            placeholder="Add customization notes..."
            className="mt-4 w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Payment & Customer Info */}
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Customer Information</p>
          <p className="text-gray-400">Fill in your details below:</p>

          <div className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={customerInfo.name}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, name: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={customerInfo.email}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, email: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={customerInfo.phone}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, phone: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full rounded-md bg-slate-900 px-6 py-3 font-medium text-white hover:bg-gray-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
