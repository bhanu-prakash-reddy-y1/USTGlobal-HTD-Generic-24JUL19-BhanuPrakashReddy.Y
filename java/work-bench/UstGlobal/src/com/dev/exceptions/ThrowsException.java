package com.dev.exceptions;

public class ThrowsException {
	public static void main(String[] args)
			throws CustomException {
		CustomException c = new CustomException();
		try {
			s();
			System.out.println("no exception in s()");
			int res = divide(10, 4);
			System.out.println("no exception in divide(int a, int b)");
			System.out.println("divide(int a, int b) result:"+res);
		} catch (NegativeArraySizeException e) {
			System.err.println("Exception in catch block NegativeArraySizeException");
			System.err.println("getLocalizedMessage():"+c.getLocalizedMessage());
			e.printStackTrace();
		}catch (ArithmeticException e) {
			System.err.println("Exception in catch block ArithmeticException");
			e.printStackTrace();
		}
		
	}
	public static void s(){
		StringBuffer sb =  new StringBuffer(-1);
	}
	public static  int divide(int a, int b) {
		int res = a/b;
		return res;
	}



}
