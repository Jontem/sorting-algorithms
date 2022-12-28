const arr = [10, 9, 1, 4, 1, 2, 6, 8, 3];
sort(arr);
console.log(arr);

export function sort(arr: Array<number>): void {
  quicksort(arr, 0, arr.length - 1);
}

function quicksort(arr: Array<number>, low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pIndex = partition(arr, low, high);
  quicksort(arr, low, pIndex - 1);
  quicksort(arr, pIndex + 1, high);
}

function partition(arr: Array<number>, low: number, high: number): number {
  const pivot = arr[high];
  let pIndex = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      pIndex++;
      swap(arr, pIndex, j);
    }
  }
  pIndex++;
  swap(arr, pIndex, high);
  return pIndex;
}

function swap(arr: Array<number>, i1: number, i2: number): void {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}
