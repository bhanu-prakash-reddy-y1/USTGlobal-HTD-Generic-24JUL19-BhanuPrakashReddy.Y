package com.dev.arrays;

public class CreatingElements {

	public static void main(String[] args) {
		int []intArr;
		char[] charr;
		byte byteArr [];
		//declaration
		intArr = new int[5];
		charr = new char[5];
		byteArr = new byte[5];
		//creation
		intArr[0] = 1;
		intArr[1] = 2;
		intArr[2] = 3;
		intArr[3] = 4;
		intArr[4] = 5;
		charr[0] = 'a';
		charr[1] = 'b';
		charr[2] = 'c';
		charr[3] = 'd';
		charr[4] = 'e';
		byteArr[0] = 7;
		byteArr[1] = 8;
		byteArr[2] = 9;
		byteArr[3] = 10;
		byteArr[4] = 11;
		//intilization
		int res = intArr[0]*5;
		System.out.println("index 0:"+res);
		res = intArr[1]*3;
		System.out.println("index 1:"+res);
		res = intArr[2]*6;
		System.out.println("index 2:"+res);
		res = intArr[3]*7;
		System.out.println("index 3:"+res);
		res = intArr[4]*8;
		System.out.println("index 4:"+res);
		//utilization

	}

}
