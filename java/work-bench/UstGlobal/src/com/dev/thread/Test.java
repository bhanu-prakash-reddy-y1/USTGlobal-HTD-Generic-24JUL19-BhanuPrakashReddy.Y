package com.dev.thread;

public class Test {
	
	public static void main(String[] args) {

		System.out.println("Main Thread Started......!");
		new Thread(new Thread3()).start();
		for (int i = 1; i <= 10; i++) {
			System.out.println("j = "+i);
		}
		System.out.println("Main Thread Terminated...!");

	}

}
