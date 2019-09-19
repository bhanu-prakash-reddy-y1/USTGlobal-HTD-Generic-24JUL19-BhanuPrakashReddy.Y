package com.dev.inheritance;

public class C extends B {

	static C c1 = new C();
	
	String name = "Nirmala";
	@Override
	public void printName() {
		System.out.println(name+" "+super.lastName);
	}
	
	public static void main(String[] args) {
		c1.printName();

	}

}
