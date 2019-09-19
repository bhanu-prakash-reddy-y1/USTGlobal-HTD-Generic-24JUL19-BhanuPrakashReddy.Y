package com.dev.assignments;

public class Demo {
	public static void main(String[] args) {
		String s1 = "bhanu prakash reddy y";
		String [] a = s1.split(" ");
		String s2="";
		
//		s2=a[a.length-1];
		for (int i = a.length-1; i >=0; i--) {
			s2+=" "+a[i];
		}
		s2.trim();
		System.out.println(s2);
		
		String s = "qwert2485748fcg";
		int count = 0;
		for (int i = 0; i < s.length(); i++) {
		    if (Character.isDigit(s.charAt(i))) {
		        count++;
		    }
		}
	
		System.out.println(count);
		
		
	}
}
