package com.dev.constructors;

public class ConstructorsExamples {
	
 	public ConstructorsExamples(int i){//parametarized constructor
		System.out.println("this is constructor with int arg");
	}
 	
	public ConstructorsExamples() {//no argmnt constructor
		System.out.println("this is constructor with no-arg");		
	}
	
	public ConstructorsExamples(String s) {
		System.out.println("this is constructor with String-arg");		
	}
	
	public ConstructorsExamples(String s,int a) {
		System.out.println("this is constructor with String & int  -args");		
	}
	
	public ConstructorsExamples(int a,String s) {
		System.out.println("this is constructor with  int & String  -args");		
	}
	
	public static void main(String[] args) {
		ConstructorsExamples ce = new ConstructorsExamples();
		ConstructorsExamples ce1 = new ConstructorsExamples(1);
		ConstructorsExamples ce2 = new ConstructorsExamples("String");
		ConstructorsExamples ce3 = new ConstructorsExamples("String",1);
		ConstructorsExamples ce4 = new ConstructorsExamples(1,"String");
	}
}
