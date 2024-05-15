import { merge } from "./merge";

const collection_1 = [9, 7, 5, 3, 1];
const collection_2 = [0, 2, 4, 6, 8];
const collection_3 = [1, 3, 5, 7, 9];

const result = merge(collection_1, collection_2, collection_3);
console.log(result);
