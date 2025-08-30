"use client";
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import SideFilter from "../filter/Itemfilter";
import config from "@/app/data/New_data.json";
import { FilterState } from "@/types/types";


const ItemGrid: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    selectedCategories: [],
    priceRange: 2000,
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  // Filtering logic applied to mockResults
  const filteredProducts: Product[] = config.mockResults.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());

    const matchesCategory =
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(item.type);

    // For now no price field in JSON → always true
    const matchesPrice = true;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex justify-center px-6 py-8 gap-10">
      {/* Sidebar */}
      <div className="w-72 flex-shrink-0 sticky top-24 h-fit">
        <SideFilter
          categories={config.categories}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Products */}
      <div className="flex-1 flex justify-center">
        <div className="max-w-6xl w-full">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ItemGrid;
