package com.dev.thread;

public class Printer1 {
	
	synchronized public void printValues(int i,String a) {
		
		for (int j = 0; j <= i; j++) {
			System.out.println("Thread: "+a+" j = "+j);
		}
		
	}

}
