package com.app;

import java.util.Scanner;

public class Array {

	public static void main(String[] args) {
	
		int array[]= new int[5];
		int i = 1,add=0;
		System.out.println("Enter array elenents :");
		Scanner sc= new Scanner(System.in);
		while(i<5) {
		array[i]=sc.nextInt();
		add=add+array[i];
		i++;
		}
		System.out.println("Addition of array elements is : "+ add);
		sc.close();
	}
}
