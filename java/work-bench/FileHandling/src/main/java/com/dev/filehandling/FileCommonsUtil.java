package com.dev.filehandling;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class FileCommonsUtil {

	public static void main(String[] args) throws IOException {
		FileWriter file = new FileWriter("E:/text.txt");
//		FileUtils.touch(file);
		
		file.write("bhanu");
		file.close();
		
//		if (file.exists()) {
//			System.out.println("file exists.......!");
//		}else {
//			System.out.println("file does not exits.....!");
//		}
////		FileUtils.deleteQuietly(file);
//		if (file.exists()) {
//			System.out.println("file exists.......!");
//		}else {
//			System.out.println("file does not exits.....!");
//		}
//		
	}

}
