package com.dev.thread;

public class Thread6 extends Thread {
	
	Printer1 p1;
	
	public Thread6(Printer1 pref) {
		
		p1=pref;
		
	}
	@Override
	public void run() {
		
		p1.printValues(10, "Thread6");

	}

}
