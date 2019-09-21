package com.dev.employe_info;

import java.util.HashMap;

public class LeaveStatus implements LeaveInt {

	HashMap<String , EmployeLeaveInfo> hm  = new HashMap<String, EmployeLeaveInfo>();
	
	@Override
	public boolean requestLeave(String s,EmployeLeaveInfo e1) {
		
		if (e1!=null) {
			hm.put(s, e1);
			return true;
		}
		
		return false;
	}
	
	public void showLeaves() {
		
		System.out.println(hm);
		
	}
	
	public void showLeaveData(EmployeIntImpl key) {
		System.out.println(hm.get(key));
	}

}
