package com.dev.arrays;

public class ArrayMethods {

	public static void main(String[] args) {

		String str = "ArRaY mEtHoDs";
		String str1 = "aRrAy MeThOdS";
		
		//length(),return return type is int
		int i = str.length();
		System.out.println("output of length() :"+i);
		
		//toCharArray(),return type is char[]
		char[] ch = str.toCharArray();
		System.out.println("output of toCharArray() :"+ch[0]);
		
		//charAt(index),return type is char
		char c = str.charAt(4);
		System.out.println("output Of charAt() : "+c);
		
		//equals(),return type is boolean
		boolean b = str.equals(str1);
		System.out.println("output of equals() :"+b);
		
		//equalsIgnoreCase(),return type is boolean
		boolean b1 = str.contains(str1);
		System.out.println("output of equalsIgnoreCase() :"+b1);

	}

}
