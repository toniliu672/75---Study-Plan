use std::collections::{HashMap, HashSet};
impl Solution {
    pub fn min_reorder(n: i32, connections: Vec<Vec<i32>>) -> i32 {
        let mut graph = HashMap::new();
        let mut roads = HashSet::new();
        for connection in connections {
            let u = connection[0];
            let v = connection[1];
            graph.entry(u).or_insert(vec![]).push(v);
            graph.entry(v).or_insert(vec![]).push(u);
            roads.insert((u, v));
        }
        let mut visited = vec![false; n as usize];
        let mut res = 0;
        Self::dfs(0, &graph, &roads, &mut visited, &mut res);
        res
    }

    fn dfs(node: i32, graph: &HashMap<i32, Vec<i32>>, roads: &HashSet<(i32, i32)>, visited: &mut Vec<bool>, res: &mut i32) {
        visited[node as usize] = true;
        if let Some(next_nodes) = graph.get(&node) {
            for &next_node in next_nodes {
                if !visited[next_node as usize] {
                    if roads.contains(&(node, next_node)) {
                        *res += 1;
                    }
                    Self::dfs(next_node, graph, roads, visited, res);
                }
            }
        }
    }
}