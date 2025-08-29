"use client";

import React, { useState } from "react";
import config from "@/app/data/New_data.json";
import Image from "next/image";

interface Config {
  categories: { name: string; color: string; image: string }[];
  mockResults: {
    name: string;
    type: string;
    image: string;
    price?: number;
    details?: string;
  }[];
  heroBanners: {
    [key: string]: { title: string; image?: string; color?: string };
  };
}

export default function HeroBanner() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<
    Config["mockResults"][0] | null
  >(null);

  const { categories, mockResults, heroBanners } = config as Config;

  const filteredResults = mockResults.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType ? item.type === selectedType : true)
  );

  const bannerData =
    (selectedType && heroBanners[selectedType]) || heroBanners.default;

  return (
    <section className="relative px-6 py-16 text-center text-white transition-colors min-h-[60vh] lg:min-h-[70vh]">
      {/* Background */}
      <div className="absolute inset-0 h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        {bannerData.image ? (
          <>
            <Image
              src={bannerData.image}
              alt="Hero Banner"
              className="w-full object-cover"
              height={600}
              width={1200}
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <div className={`w-full h-full ${bannerData.color}`} />
        )}
      </div>

      {/* Foreground */}
      <div className="relative z-10 pt-[10vh] lg:pt-[15vh]">
        <h1 className="text-4xl font-bold mb-4">{bannerData.title}</h1>
        <p className="text-lg mb-6 opacity-90">
          Search by name or choose a category to explore delicious items
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-t-lg px-4 py-3 bg-white text-black outline-none"
          />
        </div>

        {/* Categories */}
        {!search && (
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition ${
                  selectedType === cat.name
                    ? "bg-white text-black"
                    : "bg-black/30 hover:bg-black/50"
                }`}
                onClick={() =>
                  setSelectedType((prev) =>
                    prev === cat.name ? null : cat.name
                  )
                }
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  className="h-5 w-5"
                  height={20}
                  width={20}
                />
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {/* Results */}
        {search && (
          <div className="bg-white text-black rounded-b-lg max-w-xl mx-auto p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            {filteredResults.length > 0 ? (
              <ul className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {filteredResults.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 border-b pb-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                    onClick={() => setSelectedItem(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded object-cover"
                      height={48}
                      width={48}
                    />
                    <div className="flex-1 text-left">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </div>
        )}  

        {/* Item Details Modal/Section */}
        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white text-black rounded-lg p-6 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
              {selectedItem.price && (
                <p className="text-lg font-semibold mb-2">
                  ₹{selectedItem.price}
                </p>
              )}
              {selectedItem.details && (
                <p className="text-gray-700">{selectedItem.details}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
