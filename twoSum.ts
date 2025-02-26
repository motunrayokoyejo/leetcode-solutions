function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const missingNumber = target - nums[i];

        if(map.has(missingNumber)) {
            return [map.get(missingNumber)!, i];
        }

        map.set(nums[i], i);
    }
    return [];
};
