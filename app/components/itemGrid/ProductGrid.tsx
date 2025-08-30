import { Product } from "@/types/types";
import React from "react";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section className="py-10 text-gray-700 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Restaurant Menu</h2>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No items found. Try adjusting your filters.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((item, idx) => (
              <article
                key={idx}
                className="relative flex flex-col overflow-hidden rounded-lg border shadow-sm hover:shadow-lg transition"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="p-4 flex flex-col items-start">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.type}</p>
                </div>

                <button className="group mx-4 mb-4 flex h-10 items-center justify-center rounded-md bg-emerald-500 text-white text-sm uppercase hover:bg-emerald-600">
                  Add
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
