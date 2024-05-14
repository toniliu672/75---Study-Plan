public class Solution {
    public bool CanVisitAllRooms(IList<IList<int>> rooms) {
        bool[] visited = new bool[rooms.Count];
        visited[0] = true;
        Stack<int> stack = new Stack<int>();
        stack.Push(0);
        while (stack.Count > 0) {
            int room = stack.Pop();
            foreach (int key in rooms[room]) {
                if (!visited[key]) {
                    visited[key] = true;
                    stack.Push(key);
                }
            }
        }
        foreach (bool v in visited) {
            if (!v) return false;
        }
        return true;
    }
}