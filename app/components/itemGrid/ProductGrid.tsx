"use client";

import { Product } from "@/types/types";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import config from "@/app/data/New_data.json";
import { useCart } from "@/app/components/cart/CartItems";

export default function ProductGrid() {
  const router = useRouter();
  const { cart, addToCart, updateQuantity, getTotalItems } = useCart();

  // Generate products with ids dynamically
  const products: Product[] = config.mockResults.map((p, index) => ({
    ...p,
    id: String(index + 1),
  }));

  return (
    <section className="py-10 text-gray-700 sm:py-16 lg:py-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div
                key={product.id}
                className="cursor-pointer rounded-2xl bg-white p-4 shadow hover:shadow-lg transition"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                {/* Product Image */}
                <div className="relative h-40 w-full mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.type}</p>
                <p className="text-slate-900 font-bold mt-2">
                  ₹{product.price}
                </p>

                {/* Cart actions */}
                {quantity === 0 ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent redirect
                      addToCart(product);
                    }}
                    className="mt-3 w-full rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div
                    className="mt-3 flex items-center justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-3 py-1 rounded bg-gray-200"
                    >
                      -
                    </button>
                    <span className="font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-3 py-1 rounded bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Checkout button */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-6 right-6">
            <button
              onClick={() => router.push("/")}
              className="rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg hover:bg-slate-700"
            >
              Go to Checkout ({getTotalItems()})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
