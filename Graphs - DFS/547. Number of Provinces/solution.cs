public class Solution {
    public int FindCircleNum(int[][] isConnected) {
        int provinces = 0;
        for (int i = 0; i < isConnected.Length; i++) {
            if (isConnected[i][i] == 1) {
                provinces++;
                Dfs(i, isConnected);
            }
        }
        return provinces;
    }

    private void Dfs(int i, int[][] isConnected) {
        for (int j = 0; j < isConnected.Length; j++) {
            if (isConnected[i][j] == 1) {
                isConnected[i][j] = isConnected[j][i] = 0;
                Dfs(j, isConnected);
            }
        }
    }
}