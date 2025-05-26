/**
 * Problem 2351 - First Letter to Appear Twice (Easy)
 * Given a string s, return the first letter to appear twice.
 *
 * Time Complexity: O(n) — we scan the string once
 * Space Complexity: O(1) — max 26 English lowercase letters (constant space)
 */

var repeatedCharacter = function (s) {
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
    if (count[char] === 2) return char;
  }
};
