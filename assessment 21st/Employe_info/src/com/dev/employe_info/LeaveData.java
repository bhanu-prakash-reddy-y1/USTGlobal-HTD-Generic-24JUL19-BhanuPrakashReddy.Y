package com.dev.employe_info;

import java.util.Scanner;

public class LeaveData {
	public static int i = 100;
	public static void main(String[] args) {
		EmployeLeaveInfo e1 = new EmployeLeaveInfo();
		EmployeLeaveInfo e2 = new EmployeLeaveInfo();
		EmployeLeaveInfo e3 = new EmployeLeaveInfo();
		Scanner scn = new Scanner(System.in);
		
		EmployeInfo e11 = new EmployeInfo();
		EmployeInfo e21 = new EmployeInfo();
		
		
//		EmployeLeaveInfo el1 = new EmployeLeaveInfo();	
		e11.setEmployeName("bhanu prakash reddy");
		e11.setEmployeId(1);
		e11.setEmail("bhanu@gmail.com");
		e11.setPassword("ybpr1234");
		e11.setEmployeType("employee");
		
		e21.setEmployeName("prakash reddy");
		e21.setEmployeId(2);
		e21.setEmail("prakashreddy@gmail.com");
		e21.setPassword("pybr1234");
		e21.setEmployeType("manager");

		EmployeIntImpl empl = new EmployeIntImpl();
		empl.insertEmploye(""+getId()+"", e11);
		
		
		LeaveStatus l1 = new LeaveStatus();
		
		e1.setEmployeId(1);
		e1.setLeaveDate("21/sep/2017");
		e1.setLeaveStatus("pending");
		
		e2.setEmployeId(2);
		e2.setLeaveDate("21/sep/2017");
		e2.setLeaveStatus("pending");
		
		l1.requestLeave(""+getId()+"", e1);
		l1.requestLeave(""+getId()+"", e2);
//		l1.showLeaves();
		
		
		//***********************************
		
		System.out.println("Enter Email");
		String email = scn.next();
		System.out.println("Enter password");
		String password = scn.next();
		if(email.equals(e21.getEmail()) && password.equals(e21.getPassword()) || email.equals(e11.getEmail()) && password.equals(e11.getPassword())) {
			
			System.out.println("successfully logged in");
			System.out.println("Enter 1 for employe page or 2 for manager page");
			int k = scn.nextInt();
			
			if(k==1)
			{
				System.out.println("Enter emailId");
				String email1 = scn.next();
				System.out.println("Enter password");
				String password1 = scn.next();
				System.out.println("Enter Emplye type");
				String type = scn.next();
				System.out.println("enter 1 or 2  As a Employee");
				
				int j = scn.nextInt();
				
				if(j==1) {
					if(email1.equals(e11.getEmail()) && password1.equals(e11.getPassword()) && type.equals(e11.getEmployeType())) {
						l1.showLeaves();
					}
				}
				if(j==2) {
				 if (email1.equals(e11.getEmail()) && password1.equals(e11.getPassword()) && type.equals(e11.getEmployeType())) {
						System.out.println("Enter employe id");
					 	e3.setEmployeId(scn.nextInt());
					 	System.out.println("Enter leave date");
						e3.setLeaveDate(scn.next());
						System.out.println("Enter leave Status");
						e3.setLeaveStatus(scn.next());
						l1.requestLeave(""+getId()+"", e3);
						System.out.println("leave request added");
						l1.showLeaves();
					}
				}
					
			}else {
				System.out.println("Enter emailId");
				String email1 = scn.next();
				System.out.println("Enter password");
				String password1 = scn.next();
				System.out.println("Enter Emplye type");
				String type = scn.next();
				System.out.println("enter 1 or 2 As a Manager");
				
				int j1 = scn.nextInt();
				
				if(j1==1) {
					if(email1.equals(e21.getEmail()) && password1.equals(e21.getPassword()) && type.equals(e21.getEmployeType())) {
						
						l1.showLeaves();
						
					}
				}
				if(j1==2) {
				 if (email1.equals(e21.getEmail()) && password1.equals(e21.getPassword()) && type.equals(e21.getEmployeType())) {
						
					 	System.out.println("Decide and Enter leave Aprrove or not");
					 	String s = scn.next();
						e1.setLeaveStatus(s);
						l1.showLeaves();
					}
				}
			}
			
			
		}else {
			System.out.println("login failed Enter regestred email and password");
		}
		//**************************************
			
	}
	public static int getId() {

		return ++i;
		
	}
}
