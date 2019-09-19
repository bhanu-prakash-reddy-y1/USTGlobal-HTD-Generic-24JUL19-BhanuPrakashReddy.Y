package com.dev.collections;

import java.util.HashMap;

import com.dev.encapsulation.Pets;

public class C2 {

	public static void main(String[] args) {
		HashMap<String, Pets> hm = new HashMap<String, Pets>(); 
				Pets d = new Pets();

		d.setPetAge(1);
		d.setPetName("birav");
		d.setPetColor("black");

		Pets d1 = new Pets();
		d1.setPetAge(2);
		d1.setPetName("varib");
		d1.setPetColor("White");

		Pets d2 = new Pets();
		d2.setPetAge(2);
		d2.setPetName("Chichu");
		d2.setPetColor("Brown");
		
		Pets d3 = new Pets();
		d3.setPetAge(2);
		d3.setPetName("Chwearsghichu");
		d3.setPetColor("Brown");
		
		
		hm.put("1", null);
		
		System.out.println(hm.put("1", d));//this put method returns the old value present in that key 
		hm.put("1", d3);
		
		System.out.println("*************");
		System.out.println(hm);
		
		System.out.println(hm);
		hm.put("2", d1);
		hm.put("3", d2);
		System.out.println(hm);
		Pets p =  hm.remove("2");
		System.out.println(p);
		System.out.println(hm);
		
		System.out.println("Output of conatinskey() :"+hm.containsKey("2"));
		
		System.out.println("Output of containValue() :"+hm.containsValue(d2));
	}


}
