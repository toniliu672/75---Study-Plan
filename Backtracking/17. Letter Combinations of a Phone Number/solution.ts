function letterCombinations(digits: string): string[] {
    const digitMap: { [key: string]: string } = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    const result: string[] = [];

    function backtrack(combination: string, nextDigits: string): void {
        if (!nextDigits) {
            result.push(combination);
            return;
        }

        for (const letter of digitMap[nextDigits[0]]) {
            backtrack(combination + letter, nextDigits.slice(1));
        }
    }

    if (digits) {
        backtrack("", digits);
    }

    return result;
}
