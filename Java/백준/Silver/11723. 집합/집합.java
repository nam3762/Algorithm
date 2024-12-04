import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringBuilder resultSb = new StringBuilder();
        int bitmask = 0;
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String command = st.nextToken();
            int num = 0;
            if (st.hasMoreTokens()) {
                num = Integer.parseInt(st.nextToken()) - 1;
            }
            if (command.equals("check")) {
                boolean isSet = (bitmask & (1 << num)) != 0;
                if (isSet) resultSb.append(1).append("\n");
                else resultSb.append(0).append("\n");
            }
            bitmask = exec(command, num, bitmask);
        }
        System.out.println(resultSb);
    }

    public static int exec(String command, int num, int bitmask) {
        switch (command) {
            case "add":
                bitmask |= (1 << num);
                break;
            case "remove":
                bitmask &= ~(1 << num);
                break;
            case "toggle":
                bitmask ^= (1 << num);
                break;
            case "all":
                for (int i = 0; i < 20; i++) {
                    bitmask |= (1 << i);
                }
                break;
            case "empty":
                for (int i = 0; i < 20; i++) {
                    bitmask &= ~(1 << i);
                }
                break;
            default:
                break;
        }
        return bitmask;
    }
}