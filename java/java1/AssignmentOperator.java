public class AssignmentOperator 
{
	public static void main(String[] args) 
	{
		int i;
		int j;
		i = 20;// '=' is assgnment operator
		j = 10;// '=' is assgnment operator
		System.out.println("i = "+i);
		System.out.println("j' = "+j);
		i += j;
		System.out.println("i '+=' = "+i);
		i -= j;
		System.out.println("i '-=' = "+i);
		i *= j;
		System.out.println("i '*=' = "+i);
		i /= j;
		System.out.println("i '/=' = "+i);
		i %= j;
		System.out.println("i '%=' = "+i);
	}
}
