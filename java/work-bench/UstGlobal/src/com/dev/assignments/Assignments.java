package com.dev.assignments;

public class Assignments {

	public static void main(String[] args) {
		
		int[] array = {1,2,3,4,5,6,7};
		System.out.println("*****sum of middle Element and secondLastElement and first Elemet*****");
		
		int middleElement = (array.length)/2;
		int secondLastElement = (array.length)-2;

		int sum = array[0]+array[middleElement]+array[secondLastElement];
		
		System.out.println("sum of middle Element and secondLastElement and first Elemet of array[] is : "+sum);


		//*********************************
		System.out.println("*********reversal of an Array*********");
		int[] array1 = new int[array.length]; 
		int k = 0;

		for (int i = array.length-1; i>=0;i--,k++)
		{
			array1[k] = array[i];

		}
		for(int i = 0;i<array1.length;i++)
		{
			System.out.println("array1 ["+i+"] is :"+array1[i]+" and  array ["+i+"] is :"+array[i]);
		}

		//*******************************
		System.out.println("*********reversal of an String*********");

		String s = "Bhanu prakash Reddy y";
		String s1 = "";
		for (int i = s.length()-1;i>=0;i--)
		{
			s1 += s.charAt(i);
//			System.out.println("reverse of string s : "+s1);
		}
		System.out.println("reverse of string s : "+s1);

	}

}
