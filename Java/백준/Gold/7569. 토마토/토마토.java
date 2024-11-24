import java.io.*;
import java.util.*;

public class Main {
    static int M;
    static int N;
    static int H;
    static int[][][] map;
    static Queue<int[]> queue;
    static int nomato;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        M = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken());
        H = Integer.parseInt(st.nextToken());
        map = new int[H][N][M];
        queue = new LinkedList<>();
        nomato = 0;
        for (int i = 0; i < H; i++) {
            for (int j = 0; j < N; j++) {
                st = new StringTokenizer(br.readLine());
                for (int k = 0; k < M; k++) {
                    map[i][j][k] = Integer.parseInt(st.nextToken());
                    if (map[i][j][k] == 1) {
                        queue.add(new int[]{i, j, k, 0});
                    } else if (map[i][j][k] == 0) {
                        nomato++;
                    }
                }
            }
        }
        if (nomato == 0) {
            System.out.println(0);
        } else {
            int day = BFS();
            if (nomato == 0) {
                System.out.println(day);
            } else {
                System.out.println(-1);
            }
        }
    }

    public static int BFS() {
        int[] dx = {-1, 1, 0, 0, 0, 0};
        int[] dy = {0, 0, -1, 1, 0, 0};
        int[] dz = {0, 0, 0, 0, -1, 1};
        int maxDepth = 0;
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int currentX = current[0];
            int currentY = current[1];
            int currentZ = current[2];
            int depth = current[3];
            maxDepth = Math.max(maxDepth, depth);
            for (int i = 0; i < 6; i++) {
                int nextX = dx[i] + currentX;
                int nextY = dy[i] + currentY;
                int nextZ = dz[i] + currentZ;
                if (isInside(nextX, nextY, nextZ) && map[nextX][nextY][nextZ] == 0) {
                    map[nextX][nextY][nextZ] = 1;
                    queue.offer(new int[]{nextX, nextY, nextZ, depth + 1});
                    nomato--;
                }
            }
        }
        return maxDepth;
    }

    public static boolean isInside(int x, int y, int z) {
        return x >= 0 && x <= H - 1 && y >= 0 && y <= N - 1 && z >= 0 && z <= M - 1;
    }
}