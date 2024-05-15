export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let i = collection_1.length - 1;
  let j = 0;
  let k = 0;
  const result: number[] = [];

  while (i >= 0 && j < collection_2.length && k < collection_3.length) {
    if (
      collection_1[i] <= collection_2[j] &&
      collection_1[i] <= collection_3[k]
    ) {
      result.push(collection_1[i]);
      i--;
    } else if (collection_2[j] <= collection_3[k]) {
      result.push(collection_2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (i >= 0 && j < collection_2.length) {
    if (collection_1[i] <= collection_2[j]) {
      result.push(collection_1[i]);
      i--;
    } else {
      result.push(collection_2[j]);
      j++;
    }
  }

  while (i >= 0 && k < collection_3.length) {
    if (collection_1[i] <= collection_3[k]) {
      result.push(collection_1[i]);
      i--;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (j < collection_2.length && k < collection_3.length) {
    if (collection_2[j] <= collection_3[k]) {
      result.push(collection_2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (i >= 0) {
    result.push(collection_1[i]);
    i--;
  }

  while (j < collection_2.length) {
    result.push(collection_2[j]);
    j++;
  }

  while (k < collection_3.length) {
    result.push(collection_3[k]);
    k++;
  }

  return result;
}
