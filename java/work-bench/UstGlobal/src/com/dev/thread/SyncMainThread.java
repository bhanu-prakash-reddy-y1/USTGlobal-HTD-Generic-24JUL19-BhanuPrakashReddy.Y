package com.dev.thread;

public class SyncMainThread {

	public static void main(String[] args) {
		System.out.println("SyncMainThread started...! ");

//		Printer p = new Printer();
//		Thread4 t4  = new Thread4(p);
//		
//		t4.start();
//		try {
//			t4.join();
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//		}
//		
//		new Thread5(p).start();
		
//		for (int i = 1; i <=10; i++) {
//			System.out.println("i = "+i);
//		}
		
		
		System.out.println("SyncMainThread Terminated ...!");
		
		Printer1 p1 = new Printer1();
		
		Thread6 t6 = new Thread6(p1);
		Thread7 t7 = new Thread7(p1);
		
		t6.start();
		t7.start();
		
		
	}

}
