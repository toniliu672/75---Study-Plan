impl Solution {
    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        let mut visited = vec![false; rooms.len()];
        visited[0] = true;
        let mut stack = vec![0];
        while let Some(room) = stack.pop() {
            for &key in &rooms[room as usize] {
                if !visited[key as usize] {
                    visited[key as usize] = true;
                    stack.push(key);
                }
            }
        }
        visited.into_iter().all(|v| v)
    }
}