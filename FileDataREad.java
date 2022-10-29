import java.io.FileNotFoundException;
import java.io.FileReader;

public class FileDataREad {


    public static void main(String[] args) throws FileNotFoundException{

        FileReader fr = new FileReader("MyRunnable.java");
        char ch;
        System.out.println(fr.read(ch));
        
    }
    
}
