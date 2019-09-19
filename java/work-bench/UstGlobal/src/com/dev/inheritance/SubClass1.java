package com.dev.inheritance;

public class SubClass1 extends SuperClass1 {
	public SubClass1() {
		super();
		System.out.println("construvctor with no arguments in SubClass1");
	}
	public SubClass1(int i) {
		super(1);
		System.out.println("construvctor with int argument in SubClass1");
	}
	public SubClass1(String s) {
		super("q");
		System.out.println("construvctor with String argument in SubClass1");
	}
	public SubClass1(int j,String s) {
		super(1,"w");
		System.out.println("construvctor with int & String arguments in SubClass1");
	}
	public SubClass1(int i, String s , int j) {
		super(1,"e",3);
		System.out.println("construvctor with int ,String & int arguments in SubClass1");
	}
	public SubClass1(String s,int i) {
		super("w",6);
		System.out.println("construvctor with String & int  arguments in SubClass1");
	}

	public static void main(String[] args) {
		SubClass1 sc = new SubClass1();
		System.out.println("*************************************");
		//
		SubClass1 sc1 = new SubClass1(1);
		System.out.println("*************************************");
		//
		SubClass1 sc2 = new SubClass1("w");
		System.out.println("*************************************");
		//
		SubClass1 sc3 = new SubClass1(1,"q");
		System.out.println("*************************************");
		//
		SubClass1 sc4 = new SubClass1(1,"e",2);
		System.out.println("*************************************");
		//
		SubClass1 sc5 = new SubClass1("s",4);
		System.out.println("*************************************");
		

	}

}
