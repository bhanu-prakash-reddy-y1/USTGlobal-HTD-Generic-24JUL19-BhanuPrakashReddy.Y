package com.dev.methods;

public class MethodExample {
	public static int j = 0;
	static double v = 1.5;
	static MethodExample me  = new MethodExample();
	

	public static void main(String[] args) {

		
		
		int area = calcArea(5);
		System.out.println("area of square is : "+area);
	
		int area1 = me.areaRec(2,9);
		System.out.println("area of Rectangle"+area1);

	}
	public static int calcArea(int side) {
		int n = side * side;		
		return n;
	}
	public int areaRec(int len,int wid) {
		int j  = len * wid;
		return j;

	}

}
