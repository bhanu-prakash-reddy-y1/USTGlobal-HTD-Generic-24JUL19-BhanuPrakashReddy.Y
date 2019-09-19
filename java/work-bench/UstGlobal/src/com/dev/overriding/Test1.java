package com.dev.overriding;

public class Test1 {
	static Test1 t1 = new Test1();
	int k = 10;
	int m = 40;
	public void m1() {
		int i = 10;
		int j =  20;
		
		System.out.println("i = "+i+"  & j = "+j);
	}
	private void m2() {
		System.out.println("k+m = "+(k+m));
	}
	static void m3() {
		System.out.println("k-m = "+(t1.k-t1.m));
	}
	
	public static void main(String[] args) {
		t1.m1();
	}

}
