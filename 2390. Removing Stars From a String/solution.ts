function removeStars(s: string): string {
    const stack: string[] = [];

    for (const char of s) {
        if (char !== '*') {
            stack.push(char);
        } else {
            if (stack.length > 0) {
                stack.pop();
            }
        }
    }

    return stack.join('');
}