package dsa.recursion;

public class DecimalToBinary {
    public static int decimalToBinary(int num){
     
        if(num ==0  ){
            return num;
        }
        return num%2 + 10*decimalToBinary(num/2);

    }
    public static void main(String[] args) {
         System.out.println(decimalToBinary(4));
    }
}
