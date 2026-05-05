class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
 topKFrequent(nums, k) {
  // 1) Count frequencies
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // 2) Sort by frequency descending
  const sorted = Array.from(freq.entries())
    .sort((a, b) => b[1] - a[1]); // [ [num, count], ... ]

  // 3) Take top k numbers
  const res = [];
  for (let i = 0; i < k && i < sorted.length; i++) {
    res.push(sorted[i][0]);
  }
  return res;
}
}
