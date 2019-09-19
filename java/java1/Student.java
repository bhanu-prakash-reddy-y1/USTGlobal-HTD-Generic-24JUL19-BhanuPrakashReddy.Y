import java.util.Scanner;
public class Student 
{
	public static void main(String[] args) 
	{
		Scanner scn = new Scanner(System.in);
		System.out.print("Enter  marks :");
		 int i = scn.nextInt();

		if (i>100)
		{
			System.out.println("Invalid Marks");	
		}
		else if (i<=100 && i>=91)
		{
			System.out.println("grade A");
		}
		else if (i<=90 && i>=81)
		{
			System.out.println("grade B");
		}
		else if (i<=80 && i>=71)
		{
			System.out.println("grade C");
		}
		else if (i<=70 && i>=61)
		{
			System.out.println("grade D");
		}
		else if (i<=60 && i>=51)
		{
			System.out.println("grade E");
		}
		else if (i<=50 && i>=41)
		{
			System.out.println("RETEST");
		}
		else{
		System.out.println("FAIL");
		}
	}
}