package com.dev.assessment;

public class EmployeeData {

	public static void main(String[] args) {
		EmployeeInfcImpl emp = new EmployeeInfcImpl();

		Employee e1 = new Employee();
		e1.setEmpId(1);
		e1.setEname("bhanu prakash reddy y");
		e1.setEmail("ybnuprksrdy");
		e1.setPassword("ybpr456789");
		e1.setSalary(1110000.0989);
		

		Employee e2 = new Employee();
		e2.setEmpId(2);
		e2.setEname("revanth y");
		e2.setEmail("ybnuprksrdy@mail.com");
		e2.setPassword("ykldsfjh");
		e2.setSalary(1110134000.0989);
		
		Employee e3 = new Employee();
		e3.setEmpId(1);
		e3.setEname("bhanu prakash reddy y");
		e3.setEmail("ybnuprksrdy");
		e3.setPassword("ybpr456789");
		e3.setSalary(8400000.0989);

		System.out.println(emp.insertEmploye("1", e1));

//		emp.searchEmployee("1");
		
		System.out.println(emp.insertEmploye("2", e2));

//		emp.searchEmployee("2");
		emp.getData();
		
		System.out.println(emp.RemoveEmploye("1"));
		emp.getData();
		
		System.out.println(emp.upDateEmail(e1, "itsbpoen@gamil"));
		System.out.println(emp.insertEmploye("1", e1));
		emp.getData();
		
		
		System.out.println(emp.netPay(e3.getSalary()));
	}

}
