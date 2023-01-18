const arr = [10, 9, 1, 7, 4, 2, 6, 5, 8, 3];
const sorted = sort(arr);
console.log(JSON.stringify(sorted));

export function sort(arr: ReadonlyArray<number>): ReadonlyArray<number> {
  return mergeSort(arr.concat());
}

function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left: Array<number>, right: Array<number>): Array<number> {
  const result: Array<number> = [];
  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift()!);
      } else {
        result.push(right.shift()!);
      }
    } else if (left.length) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return result;
}
