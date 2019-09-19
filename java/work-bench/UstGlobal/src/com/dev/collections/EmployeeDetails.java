package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Employee;

public class EmployeeDetails {

	public static void main(String[] args) {
		HashSet<Employee> hs = new HashSet<Employee>();
		 Employee e1 = new Employee();
		 Employee e2 = new Employee();
		 Employee e3 = new Employee();
		 
		 e1.setName("Bhanu prakash reddy y");
		 e1.setId(1);
		 e1.setEmail("ybnuprksrdy@gmail.com");
		 e1.setPassword("ybpr5678");
		 
		 e2.setName("Revanth Kumar");
		 e2.setId(2);
		 e2.setEmail("revanth333@gmail.com");
		 e2.setPassword("reventh5678");
		 
		 e3.setName("Sucharitha");
		 e3.setId(3);
		 e3.setEmail("Sucharitha@gmail.com");
		 e3.setPassword("Sucharitha23456");
		 
		 System.out.println(hs.add(e1));
		 System.out.println(hs.add(e2));
		 System.out.println(hs.add(e3));
		 
		 System.out.println(hs);
		 
		 e1.setEmail("itsbpopen@gmail.com");
		 System.out.println(hs);
		 

	}

}
