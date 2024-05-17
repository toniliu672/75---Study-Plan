function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);
    const pairs: number[] = [];
    const m = potions.length;

    for (const spell of spells) {
        let count = 0;
        let left = 0;
        let right = m - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const product = spell * potions[mid];

            if (product >= success) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        count = m - left;
        pairs.push(count);
    }

    return pairs;
}