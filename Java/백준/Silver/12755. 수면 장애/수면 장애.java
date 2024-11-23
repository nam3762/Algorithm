import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 100000000; i++) {
            sb.append(i);
            if (sb.length() >= N) {
                break;
            }
        }
        System.out.println(sb.charAt(N - 1));
    }
}