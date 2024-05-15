// test/merge.test.ts
import { merge } from "../src/merge";

describe("merge", () => {
  it("should merge and sort the arrays correctly", () => {
    const collection_1 = [9, 7, 5, 3, 1];
    const collection_2 = [0, 2, 4, 6, 8];
    const collection_3 = [1, 3, 5, 7, 9];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9]);
  });

  it("should handle empty collections", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  it("should handle one non-empty collection", () => {
    const collection_1: number[] = [3, 2, 1];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3]);
  });
});
