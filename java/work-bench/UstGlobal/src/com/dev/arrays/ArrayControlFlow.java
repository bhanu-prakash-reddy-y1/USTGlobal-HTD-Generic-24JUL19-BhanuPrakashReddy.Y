package com.dev.arrays;

public class ArrayControlFlow {

	public static void main(String[] args) {
		int[] array = {1,2,3,4,5};
		int i=0;
		if (i<array.length) {
			System.out.println("index is present");
			System.out.println(array[i]);
		}
		else { 
			System.out.println("index is not present");
		}
		System.out.println("==================");
		int n=2;
		for (int j=0;j<=n;j++) {
			System.out.println(array[j]);
		}
	
	}

}
