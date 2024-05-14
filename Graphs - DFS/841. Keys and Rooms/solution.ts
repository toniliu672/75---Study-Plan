function canVisitAllRooms(rooms: number[][]): boolean {
    let visited = new Array(rooms.length).fill(false);
    visited[0] = true;
    let stack = [0];
    while (stack.length > 0) {
        let room = stack.pop();
        for (let key of rooms[room]) {
            if (!visited[key]) {
                visited[key] = true;
                stack.push(key);
            }
        }
    }
    return visited.every(v => v);
};