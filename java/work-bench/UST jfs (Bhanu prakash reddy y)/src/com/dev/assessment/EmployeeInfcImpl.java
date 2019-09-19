package com.dev.assessment;

import java.util.HashMap;

public class EmployeeInfcImpl implements EmployeeInfc{
	
	HashMap<String, Employee> hm = new HashMap<String, Employee>();

	@Override
	public boolean insertEmploye(String id, Employee e) {
		if (e!=null) {
			hm.put(id, e);
			return true;
		}
		return false;
	}

	@Override
	public void searchEmployee(String i) {
		
		System.out.println(hm.get(i));
		
	}

	@Override
	public boolean RemoveEmploye(String i) {
		if (i!=null) {
			hm.remove(i);
			return true;
		}
		return false;
	}

	@Override
	public void getData() {
		System.out.println(hm);
		
	}

	@Override
	public String upDateEmail(Employee e1,String s) {
			e1.setEmail(s);
			return "emial updated";		
		
	}

	@Override
	public double netPay(double d) {
		
		if(d>1000000) {
			double d1 = d*(9.35/100);
			double d2 = d1-(5619);
			return d2;
		}else if(d<1000000 && d>8600000) {
			double d1 = d*(8.87/100);
			double d2 = d1-(4786);
			return d2;
		}else if(d<8600000 && d>5400000) {
			double d1 = d*(8.19/100);
			double d2 = d1-(4321);
			return d2;
		}else if(d<5400000 && d>3800000) {
			double d1 = d*(7.34/100);
			double d2 = d1-(3765);
			return d2;
		}else if(d<3800000 && d>1600000) {
			double d1 = d*(7.34/100);
			double d2 = d1-(3765);
			return d2;
		} else {
			return d;
		}
	}

	

}
