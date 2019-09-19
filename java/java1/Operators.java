class Operators 
{
	public static void main(String[] args) 
	{
		int a = 10;
		int b = 20;
		int c = a + b;
		System.out.println("arithamatic operater "+c);
		c += a;
		System.out.println("assignment Operator "+c);
		c++;
		System.out.println("increment Operator "+c);
		c--;
		System.out.println("decrement Operator "+c);
		boolean bo = a<b;
		System.out.println("Relational Operator "+bo);
		boolean q = true;
		boolean w = false;
		bo = q && false;
		System.out.println("Logical Operator "+bo);
		int v  = 10 & 20;
		System.out.println("bitwise Operator "+v);
		int e = 2 ^ 3;
		System.out.println(" bitwise x-or operater "+e);
	}
}
