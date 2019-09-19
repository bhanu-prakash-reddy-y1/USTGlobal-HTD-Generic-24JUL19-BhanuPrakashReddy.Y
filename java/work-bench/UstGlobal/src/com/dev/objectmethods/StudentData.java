package com.dev.objectmethods;

public class StudentData {

	public static void main(String[] args) {
		Student s = new Student();
		Student s1 = new Student();
		s.setRegNo(2019001);
		s.setName("Bhanu prakash reddy y");
		s.setEmail("ybanuprksrdy@gmail.com");
		s.setPassword("ybpr1234");
	
		s1.setRegNo(2019001);
		s1.setName("Bhanu prakash reddy y");
		s1.setEmail("ybanuprksrdy@gmail.com");
		s1.setPassword("ybpr1234");
		
		Student[] student  = {s,s1};


		System.out.println("Registration number : "+s.getRegNo());
		System.out.println("Student Name : "+s.getName());
		System.out.println("Student email : "+s.getEmail());
		System.out.println("******************************************");
			
		System.out.println(s.equals(s1));
		System.out.println(s.hashCode());
		System.out.println(s1.hashCode());

	}

}
