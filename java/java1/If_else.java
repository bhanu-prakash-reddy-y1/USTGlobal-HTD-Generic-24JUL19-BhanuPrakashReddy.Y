import java.util.Scanner;
class If_else 
{
	public static void main(String[] args) 
	{
		Scanner scn = new Scanner(System.in);
		System.out.print("enter i value:");
		int i= scn.nextInt();
		System.out.print("Enter J value:");
		int j= scn.nextInt();
		if(i>j){
			System.out.println("I is greater");
		}
		else{
			System.out.println("J is greater");
			System.out.println("code inside else block"); 
		}
			System.out.println("code out side IF_else block");	
	}
}
