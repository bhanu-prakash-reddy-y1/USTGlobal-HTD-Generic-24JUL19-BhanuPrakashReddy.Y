package com.dev.overriding;

public class Test2 extends Test1 {
	
	static Test2 t2 = new Test2();
	
	@Override
	public void m1() {
		String i = "revanth";
		String j = "Reddy";
		System.out.println("i = "+i+"  & j = "+j);
		super.m1();
		super.m3();
	}
//	@Override
//	private void m2() {
//		
//	}// private methods in superclass can not be inherited and override in subClass
//	@Override
//	static void m3() {
//		System.out.println("overriding of static methods is not possible");
//	}//static methods in superclass  is not possible to override
	public static void main(String[] args) {
		t2.m1();
		m3();
		
	}

}
