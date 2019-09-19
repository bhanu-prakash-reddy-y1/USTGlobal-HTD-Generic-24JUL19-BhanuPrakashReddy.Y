package com.dev.practice;

import java.util.HashMap;

public class EmpIntImpl implements EmpInt {

	HashMap<String, Employee> hm = new HashMap<String, Employee>();


	@Override
	public boolean addEmployee(String s, Employee e) {
		if (e!=null) {
			hm.put(s, e);
			return true;
		}else {
			return false;			
		}

	}


	@Override
	public void dispaly() {

		System.out.println(hm);

	}


	@Override
	public boolean removeName(String s) {

		if(s!=null) {
			hm.remove(s);
			return true;
		}else {

			return false;
		}
	}


	@Override
	public boolean upDate(String s, Employee e) {
		if (e!=null) {
			hm.put(s, e);
			return true;
		}else {
			return false;			
		}
	}
}
