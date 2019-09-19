package com.dev.thread;

public class Thread3 implements Runnable {

	@Override
	public void run() {
		
		System.out.println("T3 Thread Started...!");

		for (int k = 1; k <= 10 ; k++) {
			System.out.println("k ="+k);
		}
		
		System.err.println("T3 Thread Terminated...!");
		
	}
	
	

}
