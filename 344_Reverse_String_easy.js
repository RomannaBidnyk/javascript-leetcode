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
 * Solution 1: Two-Pointer Approach (optimal)
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

/**
 * extra solution just for practicing approache
 * 
 * Solution 2: Recursive Helper Function (Two-Pointer)
 * Time Complexity: O(n)
 * Space Complexity: O(n) - due to recursive call stack
 */

var reverseString = function (s) {
    helper(s, 0, s.length - 1)
};

function helper(s, l, r) {
    if (l >= r) return;
    let temp = s[r]
    s[r] = s[l]
    s[l] = temp

    helper(s, l + 1, r - 1)
}

/**
 * extra solution just for practicing approache
 * 
 * Solution 3:  Stack-Based Approach
 * Time Complexity: O(n)
 * Space Complexity: O(n) - due to extra stack memory
 */

var reverseString = function (s) {
    const stack = [...s]
    // let stack = []
    // for (let char of s) {
    //     stack.push(char)
    // }
    for (let i = 0; i < s.length; i++) {
        s[i] = stack.pop()
    }
};
