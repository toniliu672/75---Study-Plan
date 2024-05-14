class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $connections
     * @return Integer
     */
    function minReorder($n, $connections) {
        $graph = [];
        $roads = [];
        foreach ($connections as $connection) {
            $u = $connection[0];
            $v = $connection[1];
            $graph[$u][] = $v;
            $graph[$v][] = $u;
            $roads["$u,$v"] = 1;
        }
        $visited = array_fill(0, $n, false);
        $res = 0;
        $this->dfs(0, $graph, $roads, $visited, $res);
        return $res;
    }

    function dfs($node, $graph, $roads, &$visited, &$res) {
        $visited[$node] = true;
        foreach ($graph[$node] as $nex) {
            if (!$visited[$nex]) {
                if (isset($roads["$node,$nex"])) $res++;
                $this->dfs($nex, $graph, $roads, $visited, $res);
            }
        }
    }
}