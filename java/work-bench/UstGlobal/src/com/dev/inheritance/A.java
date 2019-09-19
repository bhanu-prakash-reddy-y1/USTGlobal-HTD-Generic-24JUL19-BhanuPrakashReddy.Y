package com.dev.inheritance;

public class A {

	static A a1 = new A();
	String name = "Raja";
	String lastName = "Reddy yellarubylu";

	public void printName() {
		System.out.println(name+"  "+lastName);
	}

	public static void main(String[] args) {

		a1.printName();


	}

}
