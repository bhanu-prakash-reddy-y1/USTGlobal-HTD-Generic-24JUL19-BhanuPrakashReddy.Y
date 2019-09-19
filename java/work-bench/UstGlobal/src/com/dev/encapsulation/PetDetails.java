package com.dev.encapsulation;

public class PetDetails {

	public static void main(String[] args) {
		Pets p1 = new Pets();
		Pets p2 = new Pets();
		Pets p3 = new Pets();		
		
		
		p1.setPetType("Dog");
		p1.setPetName("Bhirav");
		p1.setPetColor("black");
		p1.setPetAge(1);
		
		p2.setPetType("Dog");
		p2.setPetName("loosi");
		p2.setPetColor("white");
		p2.setPetAge(2);
		
		p3.setPetType("Dog");
		p3.setPetName("Hulk");
		p3.setPetColor("Brown");
		p3.setPetAge(3);
		
		Pets[] dogs = {p1,p2,p3};
		
		for (int i=0;i<dogs.length;i++)
		{
			System.out.println("Pet Type:"+dogs[i].getPetType());
			System.out.println("Pet Name:"+dogs[i].getPetName());
			System.out.println("Pet Age:"+dogs[i].getPetAge());
			System.out.println("Pet Color:"+dogs[i].getPetColor());
			System.out.println("************************************");
		}
		
		Pets p4 = new Pets();
		Pets p5 = new Pets();
		Pets p6 = new Pets();	
		
		p4.setPetType("Cat");
		p4.setPetName("meow");
		p4.setPetColor("Brown");
		p4.setPetAge(1);
	
		p5.setPetType("Cat");
		p5.setPetName("kirrrr");
		p5.setPetColor("Black");
		p5.setPetAge(2);
		
		p6.setPetType("Cat");
		p6.setPetName("chichu");
		p6.setPetColor("Brown");
		p6.setPetAge(3);
		
		Pets[] cats = {p4,p5,p6};
		
		for (int i=0;i<cats.length;i++)
		{
			System.out.println("Pet Type:"+cats[i].getPetType());
			System.out.println("Pet Name:"+cats[i].getPetName());
			System.out.println("Pet Age:"+cats[i].getPetAge());
			System.out.println("Pet Color:"+cats[i].getPetColor());
			System.out.println("************************************");
		}
		
		Pets p7 = new Pets();
		Pets p8 = new Pets();
		Pets p9 = new Pets();	
		
		p7.setPetType("Rabbit");
		p7.setPetName("meow");
		p7.setPetColor("Brown");
		p7.setPetAge(1);
	
		p8.setPetType("Rabbit");
		p8.setPetName("kiran");
		p8.setPetColor("Black");
		p8.setPetAge(2);
		
		p9.setPetType("Rabbit");
		p9.setPetName("chichu");
		p9.setPetColor("Brown");
		p9.setPetAge(3);

		Pets[] rabbits = {p7,p8,p9};
		
		for (int i=0;i<rabbits.length;i++)
		{
			System.out.println("Pet Type:"+rabbits[i].getPetType());
			System.out.println("Pet Name:"+rabbits[i].getPetName());
			System.out.println("Pet Age:"+rabbits[i].getPetAge());
			System.out.println("Pet Color:"+rabbits[i].getPetColor());
			System.out.println("************************************");
		}
		

	}
	

}
