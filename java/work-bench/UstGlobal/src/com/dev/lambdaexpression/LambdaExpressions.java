package com.dev.lambdaexpression;

public class LambdaExpressions {

	public static void main(String[] args) {
		FunInt1 f = (int j) ->{
			for (int i = 1;i<=10;i++) {
				j += i;
			}
		System.out.println(j);
		};//lambdaExpression with arguments
		
		f.addNumbers(10);//FunInt1 Implementation
		
		FunInt2 f1 = () -> System.out.println("Hello World");
		f1.printHelloWorld();

		
		FunInt3 f2 = ()->{
			try {
//				StringBuffer sb  = new StringBuffer(-1);
			} catch (Exception e) {
				System.out.println("pass positive integer in StringBuffer");
			}
		};
	
	f2.exceptionMethod();
	f1.printHelloWorld();
	}

}
