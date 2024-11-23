import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        HashSet<Integer> set = new HashSet<>();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String str = st.nextToken();
            int number = 0;
            if (st.hasMoreTokens()) {
                number = Integer.parseInt(st.nextToken());
            }
            switch (str) {
                case "add":
                    set.add(number);
                    break;
                case "remove":
                    set.remove(number);
                    break;
                case "check":
                    if (set.contains(number)) {
                        sb.append(1);
                    } else {
                        sb.append(0);
                    }
                    sb.append("\n");
                    break;
                case "toggle":
                    if (set.contains(number)) {
                        set.remove(number);
                    } else {
                        set.add(number);
                    }
                    break;
                case "all":
                    for (int n = 1; n <= 20; n++) {
                        set.add(n);
                    }
                    break;
                default:
                    set.clear();
                    break;
            }
        }
        System.out.print(sb);
    }
}