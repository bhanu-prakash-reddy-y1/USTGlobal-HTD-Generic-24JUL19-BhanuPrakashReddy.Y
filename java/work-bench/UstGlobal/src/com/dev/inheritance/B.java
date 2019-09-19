package com.dev.inheritance;

public class B extends A {
	static B b1 = new B();

	String name ="Bhanu prakash";
	
	@Override
	public void printName() {
		System.out.println(name+" "+super.lastName);
	}
	public static void main(String[] args) {
		
		b1.printName();

	}

}
