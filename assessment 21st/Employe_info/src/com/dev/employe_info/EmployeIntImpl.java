package com.dev.employe_info;

import java.util.HashMap;

public class EmployeIntImpl implements EmployeInt {
	
	HashMap<String, EmployeInfo> hm = new HashMap<String, EmployeInfo>();

	@Override
	public boolean insertEmploye(String id, EmployeInfo e) {
		if(e!=null) {
			hm.put(id, e);
			return true;
		}
		return false;
	}

	public void getData() {
		System.out.println(hm);
		
	}
	
	
	
	

}
