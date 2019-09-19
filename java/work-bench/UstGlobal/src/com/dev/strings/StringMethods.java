package com.dev.strings;

public class StringMethods {

	public static void main(String[] args) {

		String str = "Bhanu_prakash_reddy_yellarubylu";
		String str1 = "bhanu_Prakash_Reddy_yellarubylu";
		
		//length(),return return type is int
		int i = str.length();
		System.out.println("output of length() :"+i);
		
		//toCharArray(),return type is char[]
		char[] ch = str.toCharArray();
		System.out.println("output of toCharArray() :"+ch[0]);
		
		//charAt(index),return type is char
		char c = str.charAt(9);
		System.out.println("output Of charAt() : "+c);
		
		//equals(),return type is boolean
		boolean b = str.equals(str1);
		System.out.println("output of equals() :"+b);
		
		//equalsIgnoreCase(),return type is boolean
		boolean b1 = str.equalsIgnoreCase(str1);
		System.out.println("output of equalsIgnoreCase() :"+b1);
		
		//contains(),return type is boolean
		boolean b2 = str.contains("Bhanu");
		System.out.println("output of contains(\"bhanu\") : "+b2);
		
		//replace(),return type is String
		String str2 = str.replace('s', 'B');
		System.out.println("output for rplace(s,B):"+str2);
		
		//indexOf(character),return type is int
		int a = str.indexOf('a');
		System.out.println("output: "+a);
		
		//toUpperCase(),return type is String
		String str3 = str.toUpperCase();
		System.out.println("output of toUpperCase : "+str3);
		
		//toLowerCase(),return type is String
		String str4 = str.toLowerCase();
		System.out.println("output of toLowerCase() : "+str4);
		
		//subString(int),return type is String  
		String s = str.substring(3);
		System.out.println("output for subString(bigninig index): "+s);
		
		//subString(int,int),return type is String, ending index value is not included 
		String s1 = str.substring(3, 7);
		System.out.println("output for subString(bigninig index,ending index): "+s1);
		

	}

}
