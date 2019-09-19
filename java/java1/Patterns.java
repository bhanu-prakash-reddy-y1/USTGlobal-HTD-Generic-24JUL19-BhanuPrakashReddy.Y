class Patterns 
{
	public static void main(String[] args) 
	{
		for (int i  = 1;i<=4 ;i++ )
		{
			for (int j = 1;j<=i ;j++ )
			{
				System.out.print("* ");
			}
			System.out.println();
		}
		System.out.println();
		for (int i = 4;i>=1;i-- )
		{
			for (int j = 1;j<=i ;j++ )
			{
				System.out.print("* ");
			}
			System.out.println();
		}
		for ( int i = 1 ; i <= 3 ;i++ )
		{
			switch (i)
			{
			case 1:
				System.out.println("Ab");
				break;
			case 2:
				System.out.println("Bb Cc");
				break;
			case 3:
				System.out.println("Dd Ee Ff");
				break;
			
			}
		}
	}
}
