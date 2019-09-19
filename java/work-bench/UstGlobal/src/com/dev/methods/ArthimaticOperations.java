package com.dev.methods;

public class ArthimaticOperations {

	//addition with 2,3 & 4 arguments

	public void add(int a , int b) {

		int i = a+b;
		System.out.println("addition of two numbers :"+i);

	}//

	public void add(int a , int b , int c) {

		int i = a+b+c;
		System.out.println("addition  of three number  :"+i);

	}//

	public void add(int a , int b , int c , int d) {

		int i = a+b+c+d;
		System.out.println("addition of four numbers :"+i);

	}//
	//Subtraction with 2,3 & 4 arguments

	public void subtraction(int a , int b) {

		int i = a-b;
		System.out.println("Subtraction of two numbers  :"+i);

	}//

	public void subtraction(int a , int b, int c) {

		int i = a-b-c;
		System.out.println("Subtraction of three numbers :"+i);

	}//

	public void subtraction(int a , int b, int c,int d) {

		int i = a-b-c-d;
		System.out.println("Subtraction of four numbers :"+i);

	}//

	//substraction with 2,3 & 4 argments

	public void mutiplication(int a , int b) {

		int i = a*b;
		System.out.println("mutiplication of two numbers :"+i);

	}//

	public void mutiplication(int a , int b, int c) {

		int i = a*b*c;
		System.out.println("mutiplication of two numbers :"+i);

	}//

	public void mutiplication(int a , int b, int c,int d) {

		int i = a*b*c*d;
		System.out.println("mutiplication of four numbers :"+i);

	}//

	//division with 2,3 % 4 arguments

	public void division(int a , int b) {

		int i = a/b;
		System.out.println("division if two numbers :"+i);

	}//

	public void division(int a , int b, int c) {

		int i = (a/b)/c;
		System.out.println("division of three numbers :"+i);

	}//

	public void division(int a , int b, int c,int d) {

		int i = ((a/b)/c)/d;
		System.out.println("division of four numbers:"+i);

	}//


	public static void main(String[] args) {
		ArthimaticOperations ao = new ArthimaticOperations();
		ao.add(1, 1);
		ao.add(1, 1, 34);
		ao.add(1, 1,23, 34);
		System.out.println("****************************");

		ao.subtraction(123, 100);
		ao.subtraction(123, 100, 20);
		ao.subtraction(123, 100, 15, 5);
		System.out.println("****************************");

		ao.mutiplication(123, 100);
		ao.mutiplication(123, 100, 20);
		ao.mutiplication(123, 100, 15, 5);
		System.out.println("****************************");

		ao.division(1230, 123);
		ao.division(123, 100, 20);
		ao.division(123, 100, 15, 5);
		System.out.println("****************************");


	}

}
