import { products, collections } from "../data";

const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFeaturedProducts() {
  await delay();
  return products;
}

export async function getCollections() {
  await delay();
  return collections;
}
