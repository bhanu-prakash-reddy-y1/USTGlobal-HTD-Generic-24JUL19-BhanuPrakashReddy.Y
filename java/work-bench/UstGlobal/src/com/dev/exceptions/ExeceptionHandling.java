package com.dev.exceptions;

public class ExeceptionHandling {

	public static void main(String[] args)
			throws CustomException {
	try {
		s();
	} catch (Exception e) {
		// TODO: handle exception
	}
		
//		System.out.println("code afte
	//r exception");
		//		try { 
		//			s();
		//		}catch(Exception e){
		//
		//			System.out.println("Exception Occured");
		//			e.printStackTrace();
		//
		//		}finally {//we can have finally block after try block with out catch block 
		//			System.out.println("this is finally block");//if we dont have catch block after try block only finally block will execute 
		//		}
		//		System.out.println("Code after Exception");
		//

	}
	public static void s() throws CustomException {
		try {
			StringBuffer sb =  new StringBuffer(-1);
			throw new CustomException();
			
		} catch (CustomException e) {
			System.out.println("catch block");
		}
		
		
	}

}
