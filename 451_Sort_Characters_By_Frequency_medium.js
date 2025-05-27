/**
 * 451 - Sort Characters By Frequency (Medium)
 *
 * Given a string s, sort it in decreasing order based on the frequency of the characters.
 * The frequency of a character is the number of times it appears in the string.
 * Return the sorted string. If there are multiple answers, return any of them.
 */

/*
 * Time Complexity:
 *   - Counting: O(n)
 *   - Sorting: O(k log k), where k is the number of unique characters (at most 62 for [a-zA-Z0-9])
 *   - Final join: O(n)
 *   => Overall: O(n + k log k)
 * Space Complexity: O(n) - to store character frequencies and build the result string
 */

var frequencySort = function (s) {
  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  const lettersCount = Object.entries(count);
  lettersCount.sort((a, b) => b[1] - a[1]);

  let result = [];
  for (const [letter, freq] of lettersCount) {
    result.push(letter.repeat(freq));
  }

  return result.join("");
};
