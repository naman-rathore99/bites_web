"use client";

import React, { useState } from "react";
import config from "@/app/data/config.json"; 

interface Config {
  categories: { name: string; color: string; image: string }[];
  mockResults: { name: string; type: string; image: string }[];
  heroBanners: {
    [key: string]: { title: string; image?: string; color?: string };
  };
}

export default function HeroBanner() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // pull data directly
  const { categories, mockResults, heroBanners } = config as Config;

  const filteredResults = mockResults.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType ? item.type === selectedType : true)
  );

  const bannerData =
    (selectedType && heroBanners[selectedType]) || heroBanners.default;

  return (
    <section className="relative py-16 px-6 text-center  text-white transition-colors">
      {/* Background */}
      <div className="absolute inset-0 ">
        {bannerData.image ? (
          <>
            <img
              src={bannerData.image}
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
          </>
        ) : (
          <div className={`w-full h-full  ${bannerData.color}`} />
        )}
      </div>

      {/* Foreground */}
      <div className="relative z-10">
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
            className="w-full rounded-lg px-4 py-3 bg-white text-black focus:ring-2 focus:ring-white outline-none"
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
                <img src={cat.image} alt={cat.name} className="h-5 w-5" />
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {search && (
          <div className="bg-white text-black rounded-lg mt-8 max-w-2xl mx-auto p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            {filteredResults.length > 0 ? (
              <ul className="space-y-3">
                {filteredResults.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 border-b pb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded object-cover"
                    />
                    <div className="flex-1">
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
      </div>
    </section>
  );
}
