function findMaxSubarray_Simple(arr) {
  if (arr.length === 0) {
    return [];
  }
  let maxSum = arr[0];
  let maxSubarray = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0; 
    
    for (let j = i; j < arr.length; j++) {

      currentSum = currentSum + arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;

        maxSubarray = arr.slice(i, j + 1);
      }
    }
  }
  return maxSubarray;
}

// Приклад:
let array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let subarray = findMaxSubarray_Simple(array1);
// Очікуваний результат: [4, -1, 2, 1]
console.log(`Для [${array1}] -> [${subarray}]`);


console.log("\n");

function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? +num1[i--] : 0;
    const digit2 = j >= 0 ? +num2[j--] : 0;
    const sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  return result;
}

console.log(addStrings("999999999999999", "1")); // "1000000000000000"

console.log("\n");

function arrayDiff(arr1, arr2) {
  let result = [...arr1];
  for (let val of arr2) {
    let index = result.indexOf(val);
    if (index !== -1) {
      result.splice(index, 1);
    }
  }
  return result;
}

console.log(arrayDiff([1, 2, 2, 3], [2, 3])); // [1, 2]
