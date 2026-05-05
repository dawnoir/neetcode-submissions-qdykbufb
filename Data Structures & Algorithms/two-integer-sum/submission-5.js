class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        let num = 0;
        for(let i=0; i<nums.length; i++){
            
            num = target - nums[i];
            if(map.has(num) && i !== map.get(num)){
                return [i, map.get(num)];
            }
            map.set(nums[i], i);
        }
    }
}
