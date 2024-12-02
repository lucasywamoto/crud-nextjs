import { Item } from "../types/item";
import { items } from "./data";
export const getItems = (): Item[] => items;
export const getItem = (id: number): Item | undefined =>
  items.find((item) => item.id === id);
export const createItem = (newItem: Omit<Item, "id">): Item => {
  const id = items.length + 1;
  const item = { id, ...newItem };
  items.push(item);
  return item;
};
export const updateItem = (
  id: number,
  updatedItem: Partial<Item>
): Item | null => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return null;
  items[index] = { ...items[index], ...updatedItem };
  return items[index];
};
export const deleteItem = (id: number): boolean => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
};
