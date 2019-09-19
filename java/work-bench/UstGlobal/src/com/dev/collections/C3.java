package com.dev.collections;

import java.util.TreeSet;

import com.dev.encapsulation.Employee;

public class C3 {

	public static void main(String[] args) {
		TreeSet<Employee> ts = new TreeSet<Employee>();
		
		Employee e1 = new Employee();
		 Employee e2 = new Employee();
		 Employee e3 = new Employee();
		 
		 e1.setName("Bhanu prakash reddy y");
		 e1.setId(1);
		 e1.setEmail("ybnuprksrdy@gmail.com");
		 e1.setPassword("ybpr5678");
		 
		 e2.setName("Revanth Kumar");
		 e2.setId(52);
		 e2.setEmail("revanth333@gmail.com");
		 e2.setPassword("reventh5678");
		 
		 e3.setName("Sucharitha");
		 e3.setId(3);
		 e3.setEmail("Sucharitha@gmail.com");
		 e3.setPassword("Sucharitha23456");
		 
		 e3.setId(0);
		 
		 ts.add(e1);
		 ts.add(e2);
		 ts.add(e3);
		 
		 System.out.println(ts);
		 

	}

}
