package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Employee;

public class Employeess implements Employees {

	
		HashSet<Employee> hs = new HashSet<Employee>();


	@Override
	public boolean addEmploye(Employee e) {
		if (e!=null) {
			hs.add(e);
			return true;
		}
		return false;
	}


	@Override
	public boolean removeEmploye(Employee e) {
		if (e!=null) {
			hs.remove(e);
			return true;
		}
		return false;
	}


	@Override
	public void getEmployee() {
		System.out.println(hs);
		
	}

}
