const arr = [10, 9, 1, 4, 2, 6, 5, 8, 3];
sort(arr);
console.log(JSON.stringify(arr));

export function sort(arr: Array<number>): void {
  quicksort(arr, 0, arr.length - 1);
}

function quicksort(arr: Array<number>, low: number, high: number): void {
  // We're at the bottom (only one element). Do nothing
  if (low >= high) {
    return;
  }

  const pIndex = partition(arr, low, high);
  
  // We now have the index of the pivot. Sort
  // the left and the right elements of the pivot.
  quicksort(arr, low, pIndex - 1);
  quicksort(arr, pIndex + 1, high);
}

function partition(arr: Array<number>, low: number, high: number): number {
  // In this implementation we have chosen
  // the last element in the slice as the pivot.
  const pivot = arr[high];
  let pIndex = low - 1;

  // Loop through all elements in the current slice
  for (let j = low; j <= high - 1; j++) {
    // If the element is less than the pivot we know
    // that it should go left of the pivot. Therefore
    // we increase the partionIndex because we know that the
    // current element comes before the pivot. We then swap the element
    // at pIndex with the current element at j.
    if (arr[j] <= pivot) {
      pIndex++;
      swap(arr, pIndex, j);
    }
  }
  // We have now found all elements less than
  // the pivot and placed them first in this slice.
  // The last thing that is needed is to
  // place the pivot at the right place(pIndex + 1) and return the pIndex
  // so the next subtrees can do their thing.
  pIndex++;
  swap(arr, pIndex, high);
  return pIndex;
}

function swap(arr: Array<number>, i1: number, i2: number): void {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}
