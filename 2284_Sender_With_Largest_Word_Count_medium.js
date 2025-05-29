/**
 * 2284 - Sender With Largest Word Count (Medium)
 *
 * Time Complexity: O(n), where n is the number of messages.
 * - We loop through all messages once to count words.
 * - We loop through all unique senders to find the max.
 *
 * Space Complexity: O(m), where m is the number of unique senders.
 * - We store counts for each unique sender in the 'words' object.
 */

var largestWordCount = function (messages, senders) {
  const words = {};

  for (let i = 0; i < messages.length; i++) {
    let wordsInMessage = messages[i].split(" ").length;
    words[senders[i]] = (words[senders[i]] || 0) + wordsInMessage;
  }

  let maxCount = 0;
  let maxSender = "";
  for (const sender in words) {
    const currCount = words[sender];
    if (
      currCount > maxCount ||
      (currCount === maxCount && sender > maxSender)
    ) {
      maxCount = currCount;
      maxSender = sender;
    }
  }
  return maxSender;
};
