package com.dev.inheritance;

public class SuperClass1 {
	public SuperClass1() {
		System.out.println("construvctor with no arguments in SuperClass");
	}
	public SuperClass1(int i) {
		System.out.println("construvctor with int argument in SuperClass");
	}
	public SuperClass1(String s) {
		System.out.println("construvctor with String argument in SuperClass");
	}
	public SuperClass1(int j,String s) {
		System.out.println("construvctor with int & String arguments in SuperClass");
	}
	public SuperClass1(int i, String s , int j) {
		System.out.println("construvctor with int ,String & int arguments in SuperClass");
	}
	public SuperClass1(String s,int i) {
		System.out.println("construvctor with String & int  arguments in SuperClass");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
