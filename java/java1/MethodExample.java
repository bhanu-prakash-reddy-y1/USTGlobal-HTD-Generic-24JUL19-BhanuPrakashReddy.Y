class MethodExample{
	public static int calcArea(int side){
		int area = side*side;
		return area;
	}
	public static double areaOfCircle(double r){
		double area = 3.14*r*r;
		return area;
	}
	public static double areaOfTriangle(double b,double h){
		double area  = 0.5*b*h;
		return area;
	}
	public static double avgOfThreeNUmber(double a,double b,double c){
		double avg = (a+b+c)/3;
		return avg;
	}
	public static void main(String[] args) 
	{
		int a = calcArea(100);
		System.out.println("area of squre: "+a);
		double b = areaOfCircle(4);
		System.out.println("area of Circle: "+b);
		double c = areaOfTriangle(3,30.4);
		System.out.println("area of Triangle: "+c);
		double d = avgOfThreeNUmber(10,20,30);
		System.out.println("avg of Three numbers: "+d);
	}
}
