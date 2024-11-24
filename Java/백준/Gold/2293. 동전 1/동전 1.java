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
        }
        DP[0] = 1;

        for (int coin : coins) {
            for (int i = coin; i <= k; i++) {
                if (i - coin >= 0) {
                    DP[i] += DP[i - coin];
                }
            }
        }
        System.out.println(DP[k]);
    }
}