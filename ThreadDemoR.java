
public class ThreadDemoR {
   public static void main(String[] args) {
    MyRunnable myrun = new MyRunnable();
    Thread t1 = new Thread(myrun);
    t1.start();
     System.out.println("main");
   }
}