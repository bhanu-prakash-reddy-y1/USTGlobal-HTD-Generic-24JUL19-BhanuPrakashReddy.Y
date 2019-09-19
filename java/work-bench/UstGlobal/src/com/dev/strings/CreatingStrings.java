package com.dev.strings;

public class CreatingStrings {

	public static void main(String[] args) {
		String str1;//type1
		str1= "bhanu prakash reddy.y";
		String s = "hello";//type2
		String str = new String("bhanu");//type3



		StringBuffer sb = new StringBuffer("hello java");

		StringBuilder sbi = new StringBuilder("java");
		
//		StringBuffer sb1 = new StringBuffer(-1);//NegativeArraySizeException: -1
		System.out.println(str);
		System.out.println(s);
		System.out.println(str1);
		System.out.println(sb);
		System.out.println(sb+ " " + sbi);
//		System.out.println(sb1);
		System.out.println(sb.length());
		System.out.println(sb.capacity());


	}

}
