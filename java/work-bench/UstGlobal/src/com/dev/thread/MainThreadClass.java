package com.dev.thread;

public class MainThreadClass {

	public static void main(String[] args) {

		System.out.println("Main Thread Started......!");
		new Thread2().start();//invoking the class which Thread Class
		Thread2 t0 = new Thread2();

		t0.setName("thread T2");
		t0.start();

		Thread.currentThread().setName("main Thread");

		Thread3 t1 = new Thread3();

		Thread thread  = new Thread(t1);
		
		 t0.setPriority(1);

		thread.start();//this total implementation done below in single line

		new Thread(new Thread3()).start();//invoking the class which implements the Runnable Interface

		for (int i = 1; i <= 10; i++) {
			System.out.println("i ="+i);
		}

		//		t0.start();//u can not call a Thread more than 1 in single program

		System.out.println("Thread Name :"+t0.getName());
		System.err.println("Thread Name1 :"+Thread.currentThread().getName());
		System.out.println("Thread2 id :"+t0.getId());
		System.err.println(t0.getPriority());
		
		
		System.out.println("Main Thread Terminated...!");
		

	}

}
