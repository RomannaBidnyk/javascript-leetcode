/**
 * Problem 2351 - First Letter to Appear Twice (Easy)
 * Given a string s, return the first letter to appear twice.
 
 */

var repeatedCharacter = function (s) {
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
    if (count[char] === 2) return char;
  }
};
