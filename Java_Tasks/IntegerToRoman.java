package tasks;

import java.util.HashMap;
import java.util.Scanner;

public class IntegerToRoman {

    public static int romanToInt(String s) {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int currentValue = romanValues.get(s.charAt(i));

            if (i + 1 < s.length() && romanValues.get(s.charAt(i + 1)) > currentValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
        }

        return result;
    }

    public static void main(String[] args) {
    	Scanner sc=new Scanner(System.in);
    	System.out.println("Enter the Roman Number");
        String romanNumeral = sc.next().toUpperCase();
        int result = romanToInt(romanNumeral);
        System.out.println(result);
    }
}

