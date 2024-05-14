impl Solution {
    pub fn find_circle_num(is_connected: Vec<Vec<i32>>) -> i32 {
        let mut is_connected = is_connected;
        let mut provinces = 0;
        for i in 0..is_connected.len() {
            if is_connected[i][i] == 1 {
                provinces += 1;
                Self::dfs(i, &mut is_connected);
            }
        }
        provinces
    }

    fn dfs(i: usize, is_connected: &mut Vec<Vec<i32>>) {
        for j in 0..is_connected.len() {
            if is_connected[i][j] == 1 {
                is_connected[i][j] = 0;
                is_connected[j][i] = 0;
                Self::dfs(j, is_connected);
            }
        }
    }
}