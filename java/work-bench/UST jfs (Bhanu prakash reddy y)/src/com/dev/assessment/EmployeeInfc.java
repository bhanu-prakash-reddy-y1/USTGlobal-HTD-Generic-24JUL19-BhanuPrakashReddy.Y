package com.dev.assessment;

public interface EmployeeInfc {
	
	boolean insertEmploye(String id,Employee e);
	
	void searchEmployee(String i);
	
	boolean RemoveEmploye(String i);
	
	void getData();
	
	String upDateEmail(Employee e1,String s);
	
	double netPay(double d);
	

}
