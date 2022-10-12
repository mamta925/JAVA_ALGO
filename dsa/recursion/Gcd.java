package dsa.recursion;

public class Gcd {
    public static int gcd(int a, int b){
        if(a == 0){
            return a;
        }
        if(b == 0){
            return b;
        }
        if(a%b == 0){
            return b;
        }
       
       
        return gcd(b, a%b);

    }
    public static void main(String[] args) {
         System.out.println(gcd(48,12));
    }
}
