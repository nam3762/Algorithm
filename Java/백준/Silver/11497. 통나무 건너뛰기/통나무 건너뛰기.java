import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        StringBuilder resultSb = new StringBuilder();
        for (int test = 1; test <= T; test++) {
            int N = Integer.parseInt(br.readLine());
            int[] arr = new int[N];
            StringTokenizer st = new StringTokenizer(br.readLine());
            for (int i = 0; i < N; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }
            Arrays.sort(arr);
            int[] new_arr = new int[N];
            int start = 0, end = N - 1, index = 0;
            while (start <= end) {
                new_arr[start] = arr[index++];
                if (index > N - 1) {
                    break;
                }
                new_arr[end] = arr[index];
                start++;
                end--;
                index++;
            }
            int max = Math.abs(new_arr[0] - new_arr[N - 1]);
            for (int i = 1; i < N; i++) {
                max = Math.max(max, Math.abs(new_arr[i] - new_arr[i - 1]));
            }
            resultSb.append(max).append("\n");
        }
        System.out.print(resultSb);
    }
}