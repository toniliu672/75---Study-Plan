use std::collections::{HashMap, HashSet};
impl Solution {
    pub fn calc_equation(equations: Vec<Vec<String>>, values: Vec<f64>, queries: Vec<Vec<String>>) -> Vec<f64> {
        let mut graph = HashMap::new();
        for (i, equation) in equations.iter().enumerate() {
            let a = &equation[0];
            let b = &equation[1];
            graph.entry(a).or_insert(HashMap::new()).insert(b, values[i]);
            graph.entry(b).or_insert(HashMap::new()).insert(a, 1.0 / values[i]);
        }
        queries.into_iter().map(|query| {
            let a = &query[0];
            let b = &query[1];
            if !graph.contains_key(a) || !graph.contains_key(b) {
                -1.0
            } else {
                let mut visited = HashSet::new();
                Self::dfs(a, b, 1.0, &graph, &mut visited).unwrap_or(-1.0)
            }
        }).collect()
    }

    fn dfs<'a>(current: &'a String, target: &'a String, product: f64, graph: &'a HashMap<&String, HashMap<&String, f64>>, visited: &mut HashSet<&'a String>) -> Option<f64> {
        visited.insert(current);
        if current == target {
            Some(product)
        } else {
            for (next, &value) in graph[current].iter() {
                if visited.contains(next) {
                    continue;
                }
                if let Some(result) = Self::dfs(next, target, product * value, graph, visited) {
                    return Some(result);
                }
            }
            None
        }
    }
}