package com.dev.employe_info;

public class EmployeLeaveInfo {
	private int employeId;
	private String leaveDate;
	private String leaveStatus;
	public int getEmployeId() {
		return employeId;
	}
	public void setEmployeId(int employeId) {
		this.employeId = employeId;
	}
	public String getLeaveDate() {
		return leaveDate;
	}
	public void setLeaveDate(String leaveDate) {
		this.leaveDate = leaveDate;
	}
	public String getLeaveStatus() {
		return leaveStatus;
	}
	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}
	@Override
	public String toString() {
		return "EmployeLeaveInfo [employeId=" + employeId + ", leaveDate=" + leaveDate + ", leaveStatus=" + leaveStatus
				+ "]";
	}

}
