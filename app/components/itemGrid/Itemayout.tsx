"use client";
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import { FilterState, Product } from "@/types/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // shadcn/ui
import SideFilter from "../filter/Itemsfilter";
import { getCategories, getProducts } from "@/lib/getProducts";

// ✅ import from our utility file instead of JSON directly

const ItemGrid: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    selectedCategories: [],
    priceRange: 2000,
  });

  const products = getProducts();
  const categories = getCategories();

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  // Filtering logic applied to products with IDs
  const filteredProducts: Product[] = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());

    const matchesCategory =
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(item.type);

    const matchesPrice = item.price <= filters.priceRange;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col md:flex-row justify-center px-6 py-8 gap-6">
      {/* Mobile Filter Drawer */}
      <div className="md:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              Show Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 sm:w-96 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <SideFilter
                categories={categories}
                onFilterChange={handleFilterChange}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar (desktop only) */}
      <div className="hidden md:block w-72 flex-shrink-0 sticky top-6 h-fit">
        <SideFilter
          categories={categories}
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
