import java.util.Scanner;
class Practice 
{
	public static void main(String[] args) 
	{
		Scanner scn = new Scanner(System.in);
		int i= scn.nextInt();
		if (i!=0 && i<=5)
		{
			System.out.println("week-day");
			System.out.println("Bhanu prakash reddy y");
		}
		else if (i>5 && i<=7)
		{
			System.out.println("week-end");
			for (int j = 1;j<=5 ;j++ )
			{
				System.out.println("bhanu prakash reddy.y");
			}
		}
		else{
		System.out.println("enter day number is not valid");
		}
	}
}
