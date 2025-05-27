/**
 * 387 - First Unique Character in a String (Easy)
 * 
 * Given a string s, return the index of the first non-repeating character.
 * If it doesn't exist, return -1.
 */

/**
 * Solution 1: Using a plain object to count character frequencies
 * Time Complexity: O(n)
 * Space Complexity: O(1) — max 26 English lowercase letters (constant space)
 */
var firstUniqChar = function (s) {
  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }

  return -1;
};

/**
 * Solution 2: Using a Map to count character frequencies
 * Map preserves insertion order, so we can iterate over entries to find first unique
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var firstUniqCharMap = function (s) {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let [char, count] of map) {
    if (count === 1) return s.indexOf(char);
  }

  return -1;
};
