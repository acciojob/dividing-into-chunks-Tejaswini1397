const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
if (n <= 0) {
    return "Invalid input: n should be greater than 0";
  }

   
  const result = [];
  let currentSubarray = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    // Check if adding the current element exceeds the maximum sum
    if (
      currentSubarray.reduce((sum, num) => sum + num, 0) + currentElement <= n
    ) {
      currentSubarray.push(currentElement);
    } else {
      // Start a new subarray
      result.push([...currentSubarray]);
      currentSubarray = [currentElement];
    }
  }
  // Add the last subarray
  if (currentSubarray.length > 0) {
    result.push([...currentSubarray]);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
