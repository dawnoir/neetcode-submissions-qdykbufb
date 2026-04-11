class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result =[];
        for( var i = 0; i< nums.length; i++){
            var numberToFind = target - nums[i];
            for( var j = nums.length -1; j >= 0; j--){
              if(i !== j && (numberToFind === nums[j])){
                result.push(i);
                result.push(j);
                return result
              }
            }
        }

    }
}
