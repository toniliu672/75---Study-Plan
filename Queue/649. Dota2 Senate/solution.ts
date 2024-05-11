function predictPartyVictory(senate: string): string {
    const n = senate.length;
    const radiant: number[] = [];
    const dire: number[] = [];

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length > 0 && dire.length > 0) {
        const radIdx = radiant.shift()!;
        const dirIdx = dire.shift()!;

        if (radIdx < dirIdx) {
            radiant.push(radIdx + n);
        } else {
            dire.push(dirIdx + n);
        }
    }

    return radiant.length > 0 ? "Radiant" : "Dire";
}