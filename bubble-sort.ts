const arr = [10, 9, 1, 4, 1, 2, 6, 8, 3];
sort(arr);
console.log(arr);

export function sort(arr: Array<number>): void {
  bubbleSort(arr);
}

function bubbleSort(arr: Array<number>): void {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        swapped = true;
      }
    }
  } while (swapped);
}

function swap(arr: Array<number>, i1: number, i2: number): void {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}
