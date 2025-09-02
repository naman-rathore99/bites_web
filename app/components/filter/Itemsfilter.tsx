"use client";
import { Category, FilterState } from "@/types/types";
import React, { useState } from "react";

interface SideFilterProps {
  categories: Category[];
  onFilterChange: (filters: FilterState) => void;
}

const SideFilter: React.FC<SideFilterProps> = ({
  categories,
  onFilterChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(500);

  const handleCategoryChange = (category: string) => {
    let updated: string[];
    if (selectedCategories.includes(category)) {
      updated = selectedCategories.filter((item) => item !== category);
    } else {
      updated = [...selectedCategories, category];
    }
    setSelectedCategories(updated);
    onFilterChange({ searchTerm, selectedCategories: updated, priceRange });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ searchTerm: value, selectedCategories, priceRange });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceRange(value);
    onFilterChange({ searchTerm, selectedCategories, priceRange: value });
  };

  return (
    <div className="p-4 rounded-md bg-gray-100 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Filter</h3>

      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">Categories</h4>
        {categories.map((cat) => (
          <label key={cat.name} className="block text-sm">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat.name)}
              onChange={() => handleCategoryChange(cat.name)}
              className="mr-2"
            />
            {cat.name}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">Price Range: ₹{priceRange}</h4>
        <input
          type="range"
          min="0"
          max="2000"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SideFilter;
