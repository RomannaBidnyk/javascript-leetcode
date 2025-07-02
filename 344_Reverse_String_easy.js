/**
 * 344 - Reverse String (Easy)
 *
 * Write a function that reverses a string. 
 * The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
*/

/**
 * Solution: Two-Pointer Approach
 * Time Complexity: O(n)
 * Space Complexity: O(1) - in-place
 */

var reverseString = function (s) {
    let l = 0, r = s.length - 1
    while (l < r) {
        let temp = s[r]
        s[r] = s[l]
        s[l] = temp
        l++;
        r--;
    }
};