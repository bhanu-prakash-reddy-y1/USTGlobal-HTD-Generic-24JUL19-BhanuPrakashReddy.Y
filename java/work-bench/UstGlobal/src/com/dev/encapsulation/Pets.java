package com.dev.encapsulation;

public class Pets implements Comparable<Pets>{
	
	@Override
	public String toString() {
		return "Pets [petName=" + petName + ", petAge=" + petAge + ", petColor=" + petColor + ", petType=" + petType
				+ "]";
	}
	private String petName;
	private int petAge;
	private String petColor;
	private String petType;
	
	public String getPetName() {
		return petName;
	}
	public void setPetName(String petName) {
		this.petName = petName;
	}
	public int getPetAge() {
		return petAge;
	}
	public void setPetAge(int petAge) {
		this.petAge = petAge;
	}
	public String getPetColor() {
		return petColor;
	}
	public void setPetColor(String petColor) {
		this.petColor = petColor;
	}
	public String getPetType() {
		return petType;
	}
	public void setPetType(String petType) {
		this.petType = petType;
	}
	@Override
	public int compareTo(Pets o) {
		// TODO Auto-generated method stub
		return (this.petAge -o.petAge);
	}
	

}
