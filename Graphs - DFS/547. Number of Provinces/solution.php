class Solution {

    /**
     * @param Integer[][] $isConnected
     * @return Integer
     */
    function findCircleNum($isConnected) {
        $provinces = 0;
        $n = count($isConnected);
        for ($i = 0; $i < $n; $i++) {
            if ($isConnected[$i][$i] == 1) {
                $provinces++;
                $this->dfs($i, $isConnected);
            }
        }
        return $provinces;
    }

    function dfs($i, &$isConnected) {
        for ($j = 0; $j < count($isConnected); $j++) {
            if ($isConnected[$i][$j] == 1) {
                $isConnected[$i][$j] = $isConnected[$j][$i] = 0;
                $this->dfs($j, $isConnected);
            }
        }
    }
}