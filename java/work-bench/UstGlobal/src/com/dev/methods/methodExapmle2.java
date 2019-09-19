package com.dev.methods;

public class methodExapmle2 {

	public static void main(String[] args) {
		MethodExample me = new MethodExample();//creating instance of the MethodExample class
		int area  = MethodExample.calcArea(7);
		System.out.println("Printing area in other class: "+area);
		int area1  = me.areaRec(10, 20);
		System.out.println("area of the Rectangle: "+area1);
	}

}
