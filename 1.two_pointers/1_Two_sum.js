//? QUESTION
// Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

//* SOLUTION:
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return [left + 1, right + 1];
};


const nums = [-5, -2, 3, 4, 6];
const target = 7;

function pair_sum_sorted_brute_force(nums, target) {
  for(let i=0; i<nums.length; i++) {
    for(let j =i+1; j<nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}


// Meth2:
// This approach works only if the input array is sorted in ascending order.
function pair_sum_sorted_ascending(nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n-1;

  while(left < right) {
    const sum = nums[left] + nums[right];

    if(sum === target) {
      return [left, right];
    } else if(sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

// Meth3: Most Optimised O(n) - TC - This approach works for both ascending and descending sorted arrays.
function pair_sorted(nums, target) {
    let numsMap = new Map();
    for(let i=0; i< nums.length; i++) {
        let comp = target - nums[i]
        if(numsMap.has(comp)) {
            return [i, numsMap.get(comp)]
        }
        numsMap.set(nums[i], i);
    }
    return [];
}

console.log('pair_sorted', pair_sorted([-1,-2,-3,-4,-5], -8))