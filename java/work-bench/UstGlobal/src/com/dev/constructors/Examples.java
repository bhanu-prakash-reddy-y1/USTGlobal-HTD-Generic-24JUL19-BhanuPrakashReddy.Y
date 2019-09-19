package com.dev.constructors;

public class Examples {

	public Examples() {//constructor over loading 
		System.out.println("Constructor with no argmts");
	}

	public Examples(int a) {//constructor over loading
		System.out.println("value of int a : "+a);
		System.out.println("Constructor with int  argmts");
	}


	public Examples(int a , int b) {//constructor over loading
		System.out.println("Constructor with int,int argmts");
		System.out.println("value of int a & b : "+a+" & "+b);
	}


	public Examples(int a , String s , char c) {//constructor over loading
		System.out.println("Constructor with int,String,char argmts");
		System.out.println("value of int a: "+a+" & String s: "+s+" & char c:  "+c);
	}


	public static void main(String[] args) {

		Examples e = new Examples();
		Examples e1 = new Examples(1);
		Examples e2 = new Examples(1,2);
		Examples e3 = new Examples(1,"BPRY",'B');


	}

}
