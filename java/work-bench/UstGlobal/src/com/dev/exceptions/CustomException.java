package com.dev.exceptions;

public class CustomException extends Exception {
	
	public CustomException() {
		System.out.println("Exception occured");
	}
	public CustomException(int i) {
		System.out.println("Exception for intiger");
	}
	public CustomException(String str) {
		System.out.println("Exception for String");
	}

	@Override
	public String getLocalizedMessage() {
		return "exception in NegativeArraySizeException" ;
	}
}
