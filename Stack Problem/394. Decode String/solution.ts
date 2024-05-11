function decodeString(s: string): string {
    const stack: (string | number)[] = [];
    let currentNum = 0;
    let currentString = '';

    for (const char of s) {
        if (!isNaN(parseInt(char))) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(currentString);
            stack.push(currentNum);
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            const num = stack.pop() as number;
            const prevString = stack.pop() as string;
            currentString = prevString + currentString.repeat(num);
        } else {
            currentString += char;
        }
    }

    return currentString;
}