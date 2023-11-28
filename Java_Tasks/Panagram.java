package tasks;

import java.util.HashSet;
import java.util.Scanner;

public class Panagram {
	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the string");
		String str=sc.nextLine().toUpperCase();
		HashSet h1=new HashSet<>();
		
		for(int i=0;i<str.length();i++)
		{
			if(str.charAt(i)>='A' && str.charAt(i)<='Z')
			{
				h1.add(str.charAt(i));
			}

	}
		
		if(h1.size()==26)
		{
			System.out.println("Entered String is panagram");
		}
		
		else
		{
			System.out.println("Entered String is not Panagram");
		}
}
}
