package com.dev.methods;

public class MethodOverloading {
	
//	public static MethodOverloading() {
//		// TODO Auto-generated constructor stub
//	}we can not use static for constructors
	
	static MethodOverloading mo = new MethodOverloading();
	
	public void print() {
		System.out.println("print method with no args");
	}
	
	public int print(int i) {
		System.out.println("print method with int arg");
		return i;
	}
	
	public String print(String i) {
		System.out.println("print method with String arg");
		return i;
	}
	private String bpr(String i,int j) {
		System.out.println("print method with String arg");
		return i;
	}
	private String bpr(String i) {
		System.out.println("print method with String arg");
		return i;
	}
	 final String bpr1(String i,int j) {
		System.out.println("print method with String arg");
		return i;
	}
	final String bpr1(String i) {
		System.out.println("print method with String arg");
		return i;
	}

	
	public static void main(String[] args) {
		
		mo.print();
		mo.print(2345);
		mo.print("Prakash reddy");
		
	}

}
