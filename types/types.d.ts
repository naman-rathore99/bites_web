export type Category = {
  name: string;
  color: string;
  image: string;
};

export type Product = {
  name: string;
  type: string;
  image: string;
  price?: number; 
  id: string;
};

export type FilterState = {
  searchTerm: string;
  selectedCategories: string[];
  priceRange: number;
};


export interface Category {
  id?: string;
  name: string;
  color?: string;
  image?: string;
}

export interface Product {
  id?: string;
  name: string;
  type: string; // category
  image: string;
  price: number;
}

export interface FilterState {
  searchTerm: string;
  selectedCategories: string[];
  priceRange: number;
}

export interface User {
  id: string;
  name?: string;
  email: string;
}
