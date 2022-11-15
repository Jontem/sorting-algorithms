const arr = [10, 9, 1, 4, 1, 2, 6, 8, 3];
sort(arr);
console.log(arr);

function sort(arr: Array<number>): void {
  quicksort(arr, 0, arr.length - 1);
}

function quicksort(arr: Array<number>, low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pi = partition(arr, low, high);
  quicksort(arr, low, pi - 1);
  quicksort(arr, pi + 1, high);
}

function partition(arr: Array<number>, low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, high);
  return i;
}

function swap(arr: Array<number>, i1: number, i2: number): void {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}
