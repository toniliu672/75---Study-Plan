function findMinArrowShots(points: number[][]): number {
    if (!points.length) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);
    let arrows = 1;
    let curr = points[0];

    for (let balloon of points) {
        if (curr[1] < balloon[0]) {
            curr = balloon;
            arrows++;
        }
    }

    return arrows;
};
