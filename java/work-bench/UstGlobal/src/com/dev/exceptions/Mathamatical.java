package com.dev.exceptions;

public class Mathamatical extends CustomException {

	public static void main(String[] args) throws CustomException {
		try {
			divide(10,0);
		} catch (Exception e) {
			throw new CustomException();
		}

	}
	
	public static int divide(int i,int j) {
		int res = i/j;
		System.out.println(res);
		
		return 1;
	}

}
