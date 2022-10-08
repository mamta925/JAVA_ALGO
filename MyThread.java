/**
 * **2 ways of define thread
 * 
 * 1. By extending thread
 * 2. by Implementing Runnable Interface
 * 
 * 
 */

 class MyThread extends Thread {
    public void run(){
        System.out.println("thread");  // job of thread(inside run method)
    }
 }

 class ThreadDemo {
    public static void main(String[] args) {

        MyThread t = new MyThread();// Thread Instantiation
        t.start();// STARTING OF A THREAD 
        
    }
 }