class Solution {

    /**
     * @param Integer[][] $rooms
     * @return Boolean
     */
    function canVisitAllRooms($rooms) {
        $visited = array_fill(0, count($rooms), false);
        $visited[0] = true;
        $stack = array(0);
        while (count($stack) > 0) {
            $room = array_pop($stack);
            foreach ($rooms[$room] as $key) {
                if (!$visited[$key]) {
                    $visited[$key] = true;
                    array_push($stack, $key);
                }
            }
        }
        foreach ($visited as $v) {
            if (!$v) return false;
        }
        return true;
    }
}