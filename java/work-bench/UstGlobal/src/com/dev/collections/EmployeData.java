package com.dev.collections;

import com.dev.encapsulation.Employee;

public class EmployeData{



	public static void main(String[] args) {
		Employeess emm = new Employeess();

		Employee e1  = new Employee();
		e1.setName("bhanu prakash reddy");
		e1.setId(2);
		e1.setEmail("ybnuprksrdy@gamil.com");
		e1.setPassword("ybpr4321");
		
		Employee e2  = new Employee();
		e2.setName("revanth");
		e2.setId(1);
		e2.setEmail("revathrksrdy@gamil.com");
		e2.setPassword("revath4321");
		
		System.out.println(emm.addEmploye(e1));
		System.out.println(emm.addEmploye(e2));
		
//		emm.getEmployee();
//		System.out.println(emm.removeEmploye(e2));
		emm.getEmployee();
		
		

	}

}
