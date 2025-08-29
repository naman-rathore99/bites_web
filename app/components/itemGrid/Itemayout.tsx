"use client"
import React from "react";
import ProductGrid from "./ProductGrid";
import SideFilter from "../filter/Itemfilter";

type FilterState = {
  searchTerm: string;
  selectedCategories: string[];
  priceRange: number;
};

const ItemGrid: React.FC = () => {
  const handleFilterChange = (filters: FilterState) => {
    console.log("Filters updated:", filters);
    // You can pass this to ProductGrid or manage filtering state here
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Side Filter - 1/3 */}
      <div className="col-span-1">
        <SideFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Product Grid - 2/3 */}
      <div className="col-span-2">
        <ProductGrid />
      </div>
    </div>
  );
};

export default ItemGrid;
