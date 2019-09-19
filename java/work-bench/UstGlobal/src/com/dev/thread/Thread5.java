package com.dev.thread;

public class Thread5 extends Thread {
	
	Printer p;
	public Thread5(Printer pref) {
		p=pref;
	}
	
	@Override
	public void run() {
		try {
			Thread.currentThread().sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		p.printValue(10, "Thread5");
	}

}
