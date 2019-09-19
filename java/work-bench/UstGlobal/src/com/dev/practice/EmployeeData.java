package com.dev.practice;

public class EmployeeData {

	public static void main(String[] args) {
		EmpIntImpl emp = new EmpIntImpl();

		Employee e1 = new Employee();

		e1.setName("Bhanu prakash reddy y");
		e1.setId("169P5A0201");

		Employee e2 = new Employee();

		e2.setName("Revanth kumar");
		e2.setId("169P5A0202");

		boolean b = emp.addEmployee("101", e1);
		System.out.println(b);
		
		boolean b1 = emp.addEmployee("102", e2);
		System.out.println(b1);
		
		emp.dispaly();
		
		System.out.println(emp.removeName("101"));
		
		emp.dispaly();
		e1.setName("sucharutha");
		e1.setId("168P5A0203");
		
		emp.upDate("101", e1);
		
		emp.dispaly();
	}

}
