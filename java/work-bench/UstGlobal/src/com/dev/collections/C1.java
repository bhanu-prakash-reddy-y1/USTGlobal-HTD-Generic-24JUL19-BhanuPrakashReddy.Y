package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Pets;

public class C1 {
	public static void main(String[] args) {
		HashSet<Pets> hs = new HashSet<Pets>();
		Pets d = new Pets();
		
		d.setPetAge(1);
		d.setPetName("birav");
		d.setPetColor("black");

		Pets d1 = new Pets();
		d1.setPetAge(2);
		d1.setPetName("varib");
		d1.setPetColor("White");
		
		d.setPetAge(3);
		
		Pets d2 = new Pets();
		d2.setPetAge(2);
		d2.setPetName("Chichu");
		d2.setPetColor("Brown");
		
		boolean b = hs.add(d);
		
//		System.out.println("Output of add() : "+b);
//		System.out.println(hs);
		boolean b1 = hs.add(d1);
//		System.out.println("Output of add() : "+b1);
//		System.out.println(hs);
		
		boolean b2 = hs.add(d2);
//		System.out.println("Output of add() : "+b2);
//		System.out.println(hs);
//		
//		System.out.println("Output of remove() : "+hs.remove(d1));
//		System.out.println(hs);
//		
//		System.out.println("Output of contains() : "+hs.contains(d1));
//		
//		System.out.println("Output of size() size of HashSet : "+hs.size());
//		
//		hs.clear();
//		System.out.println("Output of size() size of HashSet : "+hs.size());
		for (Pets pets : hs) {
			System.out.println(pets);
		}
	}
}
