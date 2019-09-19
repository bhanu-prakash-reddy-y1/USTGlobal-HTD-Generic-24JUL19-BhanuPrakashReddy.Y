package com.dev.collections;

import java.util.ArrayList;

import com.dev.encapsulation.Employee;

public abstract class C4 {
	
	public static void main(String[] args) {
		ArrayList<Employee> arl = new ArrayList<Employee>();//ArrayList is resizable
		
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
		 
		 arl.add(e1);
		 arl.add(e2);
		 arl.add(e3);
		 System.out.println(arl);
		 
		 arl.trimToSize();
		 System.out.println("Size of the array after using trimToSize() : "+arl.size());
		
		 
	}

}
