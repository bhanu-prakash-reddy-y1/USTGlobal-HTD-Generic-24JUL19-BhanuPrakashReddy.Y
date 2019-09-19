package com.dev.inheritance;

public class SuperClass {
	public SuperClass() {
		System.out.println("construvctor with no arguments in SuperClass");
	}
	public SuperClass(int i) {
		System.out.println("construvctor with int argument in SuperClass");
	}
	public SuperClass(String s) {
		System.out.println("construvctor with String argument in SuperClass");
	}
	public SuperClass(int j,String s) {
		System.out.println("construvctor with int & String arguments in SuperClass");
	}
	public SuperClass(int i, String s , int j) {
		System.out.println("construvctor with int ,String & int arguments in SuperClass");
	}
	public SuperClass(String s,int i) {
		System.out.println("construvctor with String & int  arguments in SuperClass");
	}
	
}
