package com.dev.employe_info;

public class EmployeInfo {
	
	private int employeId;
	private String employeName;
	private String employeType;
	private String email;
	private String password;
	public int getEmployeId() {
		return employeId;
	}
	public void setEmployeId(int employeId) {
		this.employeId = employeId;
	}
	public String getEmployeName() {
		return employeName;
	}
	public void setEmployeName(String employeName) {
		this.employeName = employeName;
	}
	
	public String getEmployeType() {
		return employeType;
	}
	public void setEmployeType(String employeType) {
		this.employeType = employeType;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPassword() {
		return password;
	}
	@Override
	public String toString() {
		return "Employe_info [employeId=" + employeId + ", employeName=" + employeName + ", employeType=" + employeType
				+ ", email=" + email + "]";
	}
}
