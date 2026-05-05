class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
   

    groupAnagrams(strs) {
    let res = [];
    let mp = new Map();
    
    for (let i = 0; i < strs.length; i++) {
        let key = this.getHash(strs[i]);
        
        // If key is not present in the hash map, add
        // an empty group (array) in the result and
        // store the index of the group in hash map
        if (!mp.has(key)) {
            mp.set(key, res.length);
            res.push([]);
        }
        
        // Insert the string in its correct group
        res[mp.get(key)].push(strs[i]);
    }
    return res;
    }

    getHash(s) {
    const MAX_CHAR = 26;
    let freq = Array(MAX_CHAR).fill(0);
    
    // Count frequency of each character
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    
    // Create hash string using join to avoid string concatenation in the loop
    let hashArray = [];
    for (let i = 0; i < MAX_CHAR; i++) {
        hashArray.push(freq[i].toString());
        hashArray.push('#');
    }
    
    return hashArray.join('');
    }

}
