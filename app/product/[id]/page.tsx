"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import config from "@/app/data/New_data.json";
import { Product } from "@/types/types";
import { useCart } from "@/app/components/cart/CartItems";

// generate products with id
const products: Product[] = config.mockResults.map((p, index) => ({
  ...p,
  id: String(index + 1), // ✅ dynamic id assignment
}));

export default function ProductDetails() {
  const { id } = useParams();
  const { cart, addToCart, updateQuantity } = useCart();

  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">Product not found</div>
    );
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Product Image */}
      <div className="w-full h-80 relative mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">Category: {product.type}</p>
      <p className="text-xl font-semibold mb-6">₹{product.price}</p>

      {/* Quantity / Add to cart */}
      {quantity === 0 ? (
        <button
          onClick={() => addToCart(product)}
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            -
          </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
