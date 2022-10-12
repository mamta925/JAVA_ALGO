package dsa.recursion;

public class Power {
    public static int pow(int num, int count){

        if(count < 1){
            return 1;
        }
        return num*pow(num, count-1);

    }
    public static void main(String[] args) {
         System.out.println(pow(2, 4));
    }
}
