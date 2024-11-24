import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        int[] coins = new int[n];
        int[] DP = new int[k + 1];
        for (int i = 0; i < n; i++) {
            coins[i] = Integer.parseInt(br.readLine());
            if (coins[i] <= k) {
                DP[coins[i]] = 1;
            }
        }
        DP[0] = 0;

        for (int i = 1; i <= k; i++) {
            int min = 100001;
            for (int coin : coins) {
                if (i - coin >= 0) {
                    min = Math.min(min, DP[i - coin] + 1);
                }
            }
            DP[i] = min;
        }
        System.out.println(DP[k] == 100001 ? -1 : DP[k]);
    }
}