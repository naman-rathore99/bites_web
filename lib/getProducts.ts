import data from "@/app/data/New_data.json";
import { v4 as uuidv4 } from "uuid";

export function getProducts() {
  return data.mockResults.map((item) => ({
    ...item,
    id: uuidv4(), // unique id for each item
  }));
}

export function getCategories() {
  return data.categories.map((cat) => ({
    ...cat,
    id: uuidv4(),
  }));
}

export function getHeroBanners() {
  return data.heroBanners;
}
