class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const set = new Set();
        for(var i = 0 ; i<nums.length; i++){
            set.add(nums[i]);
        }

        if(nums.length !== set.size) return true
        return false;
    }
}
