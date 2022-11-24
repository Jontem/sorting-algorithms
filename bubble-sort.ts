const arr = [11, 10, 3, 4, 1, 7, 9, 2];
console.log(sort(arr.concat(), "simple"));
console.log(sort(arr.concat(), "optimized"));

export function sort(
  arr: Array<number>,
  optimized: "simple" | "optimized"
): Array<number> {
  if (optimized === "simple") {
    bubbleSort(arr);
    return arr;
  } else {
    optimizedBubbleSort(arr);
    return arr;
  }
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

// First pass the largest element will be last
// which means that we could skip that position next pass
// Second pass the second largest will be second last and
// the process repeats
function optimizedBubbleSort(arr: Array<number>): void {
  let swapped;
  let n = arr.length;
  do {
    swapped = false;
    let newN = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        swapped = true;
        newN = i;
      }
    }
    n = newN;
  } while (swapped);
}

function swap(arr: Array<number>, i1: number, i2: number): void {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}
