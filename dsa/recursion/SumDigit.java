package dsa.recursion;

public class SumDigit {
    public static int sum(int num){

        if(num <10){
            return num;
        }
        return num%10+ sum(num/10);

    }
    public static void main(String[] args) {
         System.out.println(sum(111));
    }
}
