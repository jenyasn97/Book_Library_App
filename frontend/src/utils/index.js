import { v4 as uuidv4 } from "uuid";

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function createBookWithId(book) {
  return {
    ...book,
    isFavorite: false,
    id: uuidv4(),
  };
}
