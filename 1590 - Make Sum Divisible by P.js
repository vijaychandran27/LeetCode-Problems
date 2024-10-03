/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const targetRemainder = totalSum % p;

    // If the total sum is already divisible by p
    if (targetRemainder === 0) {
        return 0;
    }

    let minLength = Infinity;
    const prefixSums = new Map();
    let currentSum = 0;

    prefixSums.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        const requiredSum = currentSum - targetRemainder;

        if (prefixSums.has(requiredSum)) {
            minLength = Math.min(minLength, i - prefixSums.get(requiredSum));
        }

        prefixSums.set(currentSum, i);
    }

    return minLength === Infinity ? -1 : minLength;
};