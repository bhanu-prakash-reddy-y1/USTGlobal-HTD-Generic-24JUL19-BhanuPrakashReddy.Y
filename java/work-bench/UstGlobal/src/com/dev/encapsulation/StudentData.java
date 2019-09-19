package com.dev.encapsulation;

public class StudentData {

	public static void main(String[] args) {
		Student s = new Student();
		s.setRegNo(2019001);
		s.setName("Bhanu prakash reddy y");
		s.setEmail("ybanuprksrdy@gmail.com");
		s.setPassword("ybpr1234");

		System.out.println("Registration number : "+s.getRegNo());
		System.out.println("Student Name : "+s.getName());
		System.out.println("Student email : "+s.getEmail());
		System.out.println("******************************************");

	}

}
