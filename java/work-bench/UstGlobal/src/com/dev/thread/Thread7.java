package com.dev.thread;

public class Thread7 extends Thread {
	
	Printer1 p1;
	
	public Thread7(Printer1 pref) {
		
		p1=pref;
		
	}
	@Override
	public void run() {
		p1.printValues(5, "Thread7");

	}

}
