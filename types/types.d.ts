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
};

export type FilterState = {
  searchTerm: string;
  selectedCategories: string[];
  priceRange: number;
};
