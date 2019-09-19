package com.dev.thread;

public class Thread2 extends Thread {
	
	@Override
	public void run() {
		
		System.out.println("Thread2 prints the value of j..!");
		
		for (int j = 1; j <= 10; j++) {
			System.out.println("j ="+j);
			
		}
		
		System.out.println("Thread2 Thread Terminated..!");
		
	}

}
