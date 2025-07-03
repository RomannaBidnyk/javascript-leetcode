/**
 * 541 - Reverse String II (Easy)
 *
 * Given a string s and an integer k, reverse the first k characters 
 * for every 2k characters counting from the start of the string.
 * 
 * If there are fewer than k characters left, reverse all of them. 
 * If there are less than 2k but greater than or equal to k characters, 
 * then reverse the first k characters and leave the other as original.
 *
 * Example:
 * "onetwoten", k = 3
 * result: "eno" + "two" + "net"
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) - due to split/join
 */


var reverseStr = function (s, k) {
    const chars = s.split('')
    for (let i = 0; i < chars.length; i += 2 * k) {
        let r = Math.min(chars.length - 1, i + k - 1)
        reverse(chars, i, r)
    }
    return chars.join("")
};

function reverse(chars, l, r) {
    while (l < r) {
        let temp = chars[l]
        chars[l] = chars[r]
        chars[r] = temp
        l++
        r--
    }
}