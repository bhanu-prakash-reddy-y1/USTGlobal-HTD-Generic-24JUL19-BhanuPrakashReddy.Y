package com.dev.inheritance;

public class Son extends Father {
	
	static Son s = new Son();
	String name = "Robb";
	@Override
	public void printName() {
		System.out.println(name+" "+super.name+" "+s.lastName);
		super.printName();
	}
	
	public static void main(String[] args) {
		
		s.printName();
		
	}
}
