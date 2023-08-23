# Two Sum

User will give us 2 argument first is a flooting number and second is targeted
number. The target number is sum value. Explain: For example user will gives us

> nums = [2,7,11,15], target = 9 We have to try with each of every number like,
> asume my answer is `x` so

```
   2 + x = 9
=> x = 9 - 2
   x = 7 // Note: this is the correct answer 7 + 2 = 9

   7 + x = 9
=> x = 9 - 7
   x = 2

   11 + x = 9
=> x = 9 - 11
   x = -11

   15 + x = 9
=> x = 9 - 15
   x = -6
```

## Process to solve this problem

- Create a for loop based on `nums.length`
- Again create a nested for loop inside the parent loop, which will incress
  parent loop index evertime 1, for example `let j = i + 1`.
- Now make a if condition, so if parent nums + children nums === user inputed
  target number same then return index of parent and children index as array.
  That's it

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      } else {
        return false;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 10));
```
