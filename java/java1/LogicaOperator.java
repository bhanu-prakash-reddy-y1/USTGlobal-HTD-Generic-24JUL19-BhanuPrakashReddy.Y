class LogicaOperator 
{
	public static void main(String[] args) 
	{
		boolean b = true;
		boolean c = false;
		boolean d = b && c;//logical and operation
		System.out.println("For && "+d);
		d = b || c;//logical or operation
		System.out.println("For || "+d);
		d = b || c;
		System.out.println("For ! "+!d);//not operators
		int w = 2 & 3;
		System.out.println(w);
		w = 2 | 3;
		System.out.println(w);
		byte o = 1;
		byte p = 2;
		int q = o | p;
		System.out.println(q);
	}
}
