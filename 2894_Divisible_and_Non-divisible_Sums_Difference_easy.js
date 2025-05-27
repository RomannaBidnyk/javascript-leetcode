/**
 * 2894 - Divisible and Non-divisible Sums Difference (Easy)
 *
 * You are given positive integers n and m.
 * Define two integers as follows:
 * num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
 * num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
 * Return the integer num1 - num2.
 * 
 * Time Complexity: O(n) - single loop from 1 to n
 * Space Complexity: O(1) - constant space
 */

var differenceOfSums = function (n, m) {
  let num1 = 0;
  let num2 = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      num1 += i;
    } else {
      num2 += i;
    }
  }

  return num1 - num2;
};
