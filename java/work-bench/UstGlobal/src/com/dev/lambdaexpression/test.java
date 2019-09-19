package com.dev.lambdaexpression;

public class test {

	public static void main(String[] args) {
		FunInt f = () -> {
			
//			for (int i = 1;i<=10;i++) {
//				System.out.println("i ="+i);
//			}
			
			try {
				int i = 10/0;
				System.out.println(i);
			} catch (Exception e) {
				System.out.println("Exception Occured.....plz clr");
			}
			
		};
		
		f.printVAl();

	}

}
