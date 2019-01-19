function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(array1, array2) {
  let mergedArray = []

  while (array1.length !== 0 && array2.length !== 0) {
    if (array1[0] < array2[0]) {
      mergedArray.push(findMinAndRemoveSorted(array1))
    } else {
      mergedArray.push(findMinAndRemoveSorted(array2))
    }
  }
  return mergedArray.concat(array1).concat(array2)
}
